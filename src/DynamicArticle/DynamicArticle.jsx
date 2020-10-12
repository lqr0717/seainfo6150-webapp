import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <header>
      <h1>{props.article.title}</h1>
      by {props.article.author}(<a href = "mailto:{props.article.authorEmail}">{props.article.authorEmail}</a>） <br />
      <time dateTime = {props.article.timeStamp}>{props.article.displayDate}</time> <br />
      </header>
      
      <p><HTMLText text={props.article.text} /></p>
    </article>
  );
};

export default DynamicArticle;
