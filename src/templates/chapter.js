import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Chapter = ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout location={location}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}

export default Chapter;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`