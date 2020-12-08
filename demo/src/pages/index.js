import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const pageQuery = graphql`
  {
    Navigations: allStrapiNavigation {
      edges {
        node {
          id
          name
          slug
          items {
            id
            title
            path
            items {
              title
              id
              path
              items {
                id
                title
                path
              }
            }
          }
        }
      }
    }
  }
`;

function IndexPage() {
  const { Navigations } = useStaticQuery(pageQuery);

  return (
    <>
      <div
        style={{
          padding: 7,
          margin: 13,
          backgroundColor: "burlywood",
          height: "90vh",
          lineHeight: 2,
          textAlign: "center",
        }}>
        <h1>Gatsby source plugin for strapi-plugin-navigation</h1>
        {JSON.stringify(Navigations, null, 2)}
      </div>
    </>
  );
}

export default IndexPage;
