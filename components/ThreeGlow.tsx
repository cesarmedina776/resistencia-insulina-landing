"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type Variant = "hero" | "cta" | "subtle";

const VARIANT_CONFIG: Record<
  Variant,
  { count: number; colors: number[]; speed: number; size: number }
> = {
  hero: {
    count: 260,
    colors: [0xd4af37, 0x14b8a6, 0xf5d889],
    speed: 0.00025,
    size: 5.5,
  },
  cta: {
    count: 180,
    colors: [0xd4af37, 0xf5d889],
    speed: 0.0004,
    size: 6,
  },
  subtle: {
    count: 90,
    colors: [0x14b8a6, 0x232b45],
    speed: 0.00015,
    size: 4,
  },
};

function makeSprite() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export default function ThreeGlow({
  variant = "hero",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const config = VARIANT_CONFIG[variant];
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(config.count * 3);
    const colorArray = new Float32Array(config.count * 3);
    const tmpColor = new THREE.Color();

    for (let i = 0; i < config.count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const c = config.colors[i % config.colors.length];
      tmpColor.set(c);
      colorArray[i * 3] = tmpColor.r;
      colorArray[i * 3 + 1] = tmpColor.g;
      colorArray[i * 3 + 2] = tmpColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: config.size,
      map: makeSprite(),
      transparent: true,
      opacity: 0.55,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let frameId: number;
    let elapsed = 0;

    function animate() {
      frameId = requestAnimationFrame(animate);
      if (!prefersReducedMotion) {
        elapsed += 1;
        points.rotation.y += config.speed;
        points.rotation.x = Math.sin(elapsed * 0.0006) * 0.08;
      }
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      material.map?.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-0 ${className}`}
    />
  );
}
