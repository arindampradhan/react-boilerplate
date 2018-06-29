module.exports = {
  components: [
    'app/components/Button/index.js',
  ],
  defaultExample: true,
  ribbon: {
    url: 'https://bitbucket.org/rubique_bdf/website_v3/',
    text: 'Fork on Bitbucket [private]',
  },
  title: 'Rubique Styleguide',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
};
