import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Solucion from "@/components/sections/Solucion";
import Comparacion from "@/components/sections/Comparacion";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Contenido from "@/components/sections/Contenido";
import PrecioCTA from "@/components/sections/PrecioCTA";
import Bonos from "@/components/sections/Bonos";
import Autoridad from "@/components/sections/Autoridad";
import Testimonios from "@/components/sections/Testimonios";
import Demostracion from "@/components/sections/Demostracion";
import ParaQuienEs from "@/components/sections/ParaQuienEs";
import SegundoCTA from "@/components/sections/SegundoCTA";
import Garantia from "@/components/sections/Garantia";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <Problema />
      <div className="section-divider" />
      <Solucion />
      <div className="section-divider" />
      <Comparacion />
      <div className="section-divider" />
      <ComoFunciona />
      <div className="section-divider" />
      <Contenido />
      <div className="section-divider" />
      <PrecioCTA />
      <div className="section-divider" />
      <Bonos />
      <div className="section-divider" />
      <Autoridad />
      <div className="section-divider" />
      <Testimonios />
      <div className="section-divider" />
      <Demostracion />
      <div className="section-divider" />
      <ParaQuienEs />
      <div className="section-divider" />
      <SegundoCTA />
      <div className="section-divider" />
      <Garantia />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <CTAFinal />
      <Footer />
    </main>
  );
}
