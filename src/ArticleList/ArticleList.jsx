import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import PropTypes from "prop-types";
import styles from "./ArticleList.module.css"

const ArticleList = (props) => {

  if (props.articles.length === 0) {
    return  <div>You have no data!</div>;
  }
  return (
    <div className={styles.listContainer}>
      {
        props.articles.map((item, index) => 
          (index % 3 === 0) ? buildUl(props.articles.slice(index, index + 3)) : null
        )
      }
    </div>
  )
};

const buildUl = (list) => {
  return (
  <ul className = {styles.listStyle} >
    {list.map((item) => (
      <li key={item.slug} ><ArticleListItem article = {item}/></li>
    ))}
  </ul>
  )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticleList;


