# gatsby-source-strapi-plugin-navigation

Gatsby source plugin to query navigations from strapi using the [strapi-plugin-navigation](https://www.npmjs.com/package/strapi-plugin-navigation)
 API.


## Install

```bash
yarn add gatsby-source-strapi-plugin-navigation
```

## How to use
   In your gatsby-config.js
```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi-plugin-navigation`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100,
        navigationEndpoint: [`navigation`],
      },
    },
  ],
};
```
