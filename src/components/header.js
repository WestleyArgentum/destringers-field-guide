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
          <div style={{ margin: '1rem' }}>
            <h3>⚠️ UNDER CONSTRUCTION ⚠️</h3>
            <p>All the information on this site is under review, please consider contributing if you see something that could be improved!</p>
            <p><a href="https://github.com/WestleyArgentum/destringers-field-guide/tree/main/src/content">Propose changes here</a>, or email <a href={`mailto:distrustful.dinosaurs+field-guide@gmail.com`}>distrustful.dinosaurs@gmail.com</a></p>
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