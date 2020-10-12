import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {props.article.author}({props.article.authorEmail})
      <time dateTime = {props.article.timeStamp}>{props.article.displayDate}</time>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
