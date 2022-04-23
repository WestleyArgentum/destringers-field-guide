import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-box">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="header-box--title">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="header-box--under-construction">
          <div style={{ margin: '0.25rem 1rem 0.75rem 1rem' }}>
            <h3>Version 1.0</h3>
            <p>There is now a <a href="https://github.com/WestleyArgentum/destringers-field-guide/releases">printable version of this guide</a> (with many more pictures!)</p>
            <p>This site is a work in progress, please consider contributing if you see something that could be improved!</p>
            <p><a href="https://github.com/WestleyArgentum/destringers-field-guide/tree/development/src/content">Propose changes here</a>, or email <a href={`mailto:distrustful.dinosaurs+field-guide@gmail.com`}>distrustful.dinosaurs@gmail.com</a></p>
          </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header