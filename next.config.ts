import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta como sitio estático: la app es 100% cliente (fetch al backend),
  // no usa API routes ni SSR, así que Azure Static Web Apps puede servirla
  // como archivos estáticos sin necesitar runtime de Node/Azure Functions.
  output: "export",
};

export default nextConfig;
