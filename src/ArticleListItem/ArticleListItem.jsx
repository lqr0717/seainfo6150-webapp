import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = (props) => {
    return (
        <article>
            <header> <h1>{props.article.title}</h1></header>
            <time dateTime = {props.article.timeStamp}>{props.article.displayDate}</time> <br />
            <p>{props.article.shortText}</p>
        </article>
      );
    };

export default ArticleListItem;