import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatActions from "@/components/common/FloatActions";
import GlobalLoader from "@/components/common/GlobalLoader"; // Asegúrate de ajustar tu ruta si está en otra carpeta
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tactical Solutions",
  description: "Soluciones eléctricas e industriales",
  icons: {
    icon: "/images/icons/icon.ico", // Corregido según tu estructura de carpetas
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-white text-zinc-900 font-sans relative`}
      >
        {/* Pantalla de carga global real para todas las rutas */}
        <GlobalLoader />

        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatActions />
      </body>
    </html>
  );
}