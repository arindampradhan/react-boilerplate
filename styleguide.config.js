const webpackconf = require('./internals/webpack/webpack.styleguide.babel.js');

module.exports = {
  sections: [
    {
      name: 'Components',
      description: 'List of all the components',
      components: ['./app/components/Button/index.js'],
    },
    {
      name: 'Lottie',
      description: 'Lottie after effects components. Responsive by nature as svg based',
      components: () => [
        './app/components/Lottie/index.js',
        './app/components/Lottie/BasicLoader.js',
        './app/components/Lottie/Loader.js',
        './app/components/Lottie/PageLoader.js',
      ],
    },
  ],
  defaultExample: true,
  ribbon: {
    url: 'https://bitbucket.org/rubique_bdf/website_v3/',
    text: 'Fork on Bitbucket [private]',
  },
  title: 'Rubique Styleguide',
  webpackConfig: webpackconf,
};
