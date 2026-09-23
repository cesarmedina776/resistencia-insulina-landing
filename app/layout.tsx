import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { UrgencyProvider } from "@/lib/UrgencyContext";
import SocialProofToast from "@/components/SocialProofToast";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Resuelve la Resistencia a la Insulina | Dr. Cesar Medina",
  description:
    "El sistema paso a paso para revertir la resistencia a la insulina y prevenir la Diabetes Mellitus, creado por un especialista con 18 años de experiencia clínica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${inter.variable} font-body bg-ink text-cream antialiased`}
      >
        <UrgencyProvider>
          {children}
          <SocialProofToast />
        </UrgencyProvider>
      </body>
    </html>
  );
}
