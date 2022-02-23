import { graphql, Link } from "gatsby"
import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const IndexPage = ( { data }) => {

  let chapters = data?.allMarkdownRemark?.nodes || [];
  console.log(chapters);
  chapters = chapters.sort((a, b) => a.frontmatter.order.localeCompare(b.frontmatter.order))

  return (
    <main style={pageStyles}>
      <title>Destringers Field Guide</title>
      <h1 style={headingStyles}>Destringers Field Guide</h1>

      <div>
        {chapters.map((chapter) => {
          return <div dangerouslySetInnerHTML={{ __html: chapter.tableOfContents }} />
        })}
      </div>
    </main>
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
