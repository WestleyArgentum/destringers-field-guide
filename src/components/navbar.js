import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Navbar = ({ data, location }) => {
    const currPath = location?.pathname || '';

    // sort all the chapters based on frontmatter
    let chapters = data?.allMarkdownRemark?.nodes || [];
    chapters = chapters.sort((a, b) => {
        return a.frontmatter.order.localeCompare(b.frontmatter.order)
    });

    // insert the index page as a fake first chapter
    chapters = [
        {
            frontmatter: {
                title: 'Table of Contents',
            },
            fields: {
                slug: '/'
            }
        },
        ...chapters
    ];

    // find the current chapter
    let currChapterIndex = chapters.findIndex((chapter) => chapter?.fields?.slug == currPath);

    // compute the previous and next chapters
    const numChapters = chapters.length;
    const prevChapter = chapters[(((currChapterIndex - 1) % numChapters) + numChapters) % numChapters];
    const nextChapter = chapters[(((currChapterIndex + 1) % numChapters) + numChapters) % numChapters];

    return (
    <div className="navbar">
        <div className="navbar--element">
            { prevChapter ? 
                <Link to={prevChapter?.fields?.slug}>{`<<< ${prevChapter?.frontmatter?.title}`}</Link>
                :
                <div></div>
            }
        </div>
        <div className="navbar--element">
            { nextChapter ? 
                <Link to={nextChapter?.fields?.slug}>{`${nextChapter?.frontmatter?.title} >>>`}</Link>
                :
                <div></div>
            }
        </div>
    </div>
    );
}

export default Navbar;
