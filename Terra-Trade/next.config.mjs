import withPlugins from "next-compose-plugins";
import nextPWA from "next-pwa";
import path from "path";

// Carga las variables de entorno
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env.production") });

const withPWA = nextPWA({
  dest: "public",
});

// Configuración de Next.js
const nextConfig = {
  distDir: "../../dist/client",
};

// Exporta la configuración usando plugins
export default withPlugins(
  [
    // Configuración de PWA
    withPWA,
  ],
  nextConfig
);
