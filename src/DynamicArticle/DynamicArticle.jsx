import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <div>{props.article.title}</div>
      
      <address>
        {props.article.author}(
          {props.article.authorEmail}
        )
      </address>
      <time dateTime = {props.article.timeStamp}>{props.article.displayDate}</time>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
