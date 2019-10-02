const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allProductsCsv  {
        edges {
          node {
            id
          }
        }
      }
    }
  `
).then(result => {
    result.data.allProductsCsv.edges.forEach(({ node }) => {
      createPage({
        path: node.id,
        component: path.resolve(`./src/templates/product-show.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
