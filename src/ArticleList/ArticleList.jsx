import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import PropTypes from "prop-types";
import styles from "./ArticleList.module.css"

const ArticleList = (props) => {

    let displayContent;
    if (props.articles.length) {
        displayContent = (
          <ul>
            {props.articles.map((item) => (
              <li key={item.slug}><ArticleListItem article = {item}/></li>
            ))}
          </ul>
        );
      } else {
        displayContent = <div>You have no data!</div>;
      }
    return (
        <div className = {styles.listStyle} >
          {displayContent}
        </div>
      );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;


