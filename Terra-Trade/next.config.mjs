const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withPWA = require("dotenv");

module.exports = withPlugins(
    [optimizedImages],
    [
      withPWA({
        pwa: {
          dest: "public",
        },
      }),
    ],
    {
      distDir: '../../dist/client',
    }
);