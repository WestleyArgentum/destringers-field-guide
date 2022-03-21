import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout";

const IndexPage = ({ data, location }) => {

  let chapters = data?.allMarkdownRemark?.nodes || [];
  chapters = chapters.sort((a, b) => {
    return a.frontmatter.order.localeCompare(b.frontmatter.order)
  });

  return (
    <Layout location={location}>
      <StaticImage src="../images/toc-cover.jpeg" />
      <div>
        {chapters.map((chapter) => {
          return <div dangerouslySetInnerHTML={{ __html: chapter.tableOfContents }} />
        })}
      </div>
    </Layout>
  );

}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        tableOfContents(
          absolute: true
          pathToSlugField: "fields.slug"
          maxDepth: 2
        )
        fields {
          slug
        }
        frontmatter {
          order
        }
      }
    }
  }
`

export default IndexPage
