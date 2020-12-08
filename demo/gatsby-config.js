module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi-plugin-navigation`,
      options: {
        apiURL: `https://sinergia-strapi.herokuapp.com`,
        queryLimit: 100, // Default to 100
        navigationEndpoint: [`navigation`],
      },
    },
  ],
};
