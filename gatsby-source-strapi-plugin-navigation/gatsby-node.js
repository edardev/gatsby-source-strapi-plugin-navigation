const fetch = require("isomorphic-unfetch");

const getNavigationByID = (apiBase, navIDs) =>
  Promise.all(
    navIDs.map(async (id) => {
      console.info(`Starting to fetch data from Strapi - ${apiBase}/${id}`);
      const response = await fetch(`${apiBase}/${id}`);
      navigation = response.json();
      if (!response.ok) {
        throw `Error fetching the navigations by IDs - Server reponse with ${response.status}`;
      }
      return navigation;
    })
  );

const getAllNavigationID = async (apiBase) => {
  console.info(`Starting to fetch data from Strapi - ${apiBase}`);
  const response = await fetch(apiBase);
  const navigations = await response.json();
  if (!response.ok) {
    throw `Error fetching ${apiBase} - Server reponse with ${response.status}`;
  }
  const IDs = await navigations.map((menu) => menu.id);
  console.log(IDs);
  return IDs;
};

// constants for your GraphQL Post and Author types
const STRAPI_NODE_TYPE = `StrapiNavigation`;
exports.sourceNodes = async (
  { actions: { createNode }, createContentDigest, createNodeId, reporter },
  { apiURL, queryLimit, navigationEndpoint }
) => {
  if (!apiURL)
    return reporter.panic(
      "gatsby-source-strapi-plugin-navigation: You must provide your strapi apiURL endpoint"
    );

  // Define API endpoint.
  let apiBase = `${apiURL}/${navigationEndpoint}`;
  // const apiEndpoint = `${apiBase}?_limit=${queryLimit}`;

  const allNavigationIDs = await getAllNavigationID(apiBase);

  const allNavigations = await getNavigationByID(apiBase, allNavigationIDs);

  const processNavigation = async (navigation) => ({
    ...navigation,
    id: createNodeId(`${STRAPI_NODE_TYPE}-${navigation.id}`),
    parent: null,
    children: [],
    internal: {
      type: STRAPI_NODE_TYPE,
      content: JSON.stringify(navigation),
      contentDigest: createContentDigest(navigation),
    },
  });

  await Promise.all(
    allNavigations.map(async (navigation) =>
      createNode(await processNavigation(navigation))
    )
  );

  return;
};
