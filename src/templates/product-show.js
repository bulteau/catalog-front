import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { title, gender_id, composition, sleeve, photo } = data.productsCsv;
  const url = "https:" + photo;
  return (
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
  )
}

export const query = graphql`
  query {
    productsCsv {
      id
      title
      gender_id
      composition
      sleeve
      photo
    }
  }
`
