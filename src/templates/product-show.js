import React from "react"
import { graphql } from "gatsby"
import Recommandations from "../components/recommandations"
import Layout from "../components/layout"

export default ({ data }) => {
  const { id, title, gender_id, composition, sleeve, photo } = data.productsCsv;
  const url = "https:" + photo;
  return (
    <Layout>
      <div>
        <img src={url} alt="Logo" style={{ width: `300px`, float: `left` }} />
        <div style={{ float: `left` }}>
          <h1>{title}</h1>
          <ul>
            <li>{gender_id}</li>
            <li>{composition}</li>
            <li>{sleeve}</li>
          </ul>
        </div>
      </div>
      <hr style={{ clear: 'both', borderTop: '1px solid #EEE' }} />
      <h2>Nos Recommandations</h2>
      <Recommandations id={id} />
      <hr style={{ clear: 'both'}} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    productsCsv ( id: { eq: $id }) {
      id
      title
      gender_id
      composition
      sleeve
      photo
    }
  }
`
