const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const nextTranslate = require('next-translate');

module.exports = withPlugins(
    [
      [withPWA, {
        pwa: {
          dest: 'public',
        },
      }],
      [nextTranslate],
    ],
    {
      future: {
        webpack5: true,
        strictPostcssConfiguration: true,
      },
      /* images: {
        domains: ['cdn.sanity.io'],
      }, */
      webpack: (config, {dev, isServer}) => {
        if (!dev && !isServer) {
          Object.assign(config.resolve.alias, {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          });
        }

        return config;
      },
    },
);
