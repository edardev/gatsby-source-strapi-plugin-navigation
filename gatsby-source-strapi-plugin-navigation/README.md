# gatsby-source-strapi-plugin-navigation

Gatsby source plugin for pulling navigation/menu into Gatsby as graphQL nodes from a [strapi](https://github.com/strapi/strapi) instace that uses the [strapi-plugin-navigation](https://www.npmjs.com/package/strapi-plugin-navigation).


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

## Strapi plugin navigation example
![strapi-plugin-navigation example](https://raw.githubusercontent.com/EAdeveloper/gatsby-source-strapi-plugin-navigation/main/images/strapi-plugin-navigation.png)


## GraphiQL example in gatsby
![GraphiQL example in gatsby](https://raw.githubusercontent.com/EAdeveloper/gatsby-source-strapi-plugin-navigation/main/images/strapi-navigation.png)