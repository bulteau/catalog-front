import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allProductsCsv.edges.map(({ node }) => (
      <div key={node.id} style={{ width: `300px`, float: `left` }}>
        <Link
          to={`/${node.id}`}
        >
        <img src={`https:${node.photo}`} alt={node.id} />
        {node.title}
        </Link>
      </div>
    ))}
    <hr style={{ clear: 'both' }} />
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    allProductsCsv {
      totalCount,
        edges {
          node {
            id
            title
            photo
          }
        }
      }
  }
`
