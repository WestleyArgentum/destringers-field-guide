import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import Contributing from "./contributing"
import "./layout.css"

const Layout = ({ children, location }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            order
            title
          }
          fields {
            slug
          }
        }
      }
      markdownRemark {
        fields {
          slug
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Navbar data={data} location={location}></Navbar>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <Contributing></Contributing>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout