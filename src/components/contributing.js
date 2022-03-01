import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Contributing = ({ children }) => {
  return (
    <div className="contributing">
        <p>
            If you see something in this guide that could be improved, please contribute your knowledge!
        </p>
        <p>
            <a href="https://github.com/WestleyArgentum/destringers-field-guide/tree/main/src/content">Propose changes here</a>, or email <a href={`mailto:distrustful.dinosaurs+field-guide@gmail.com`}>distrustful.dinosaurs@gmail.com</a>
        </p>
    </div>
  );
}

export default Contributing;