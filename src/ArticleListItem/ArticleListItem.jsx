import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css"
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";

const ArticleListItem = (props) => {
    //console.log(props.article);
    
    const [showAriticle, SetshowArticle] = useState({                
        shortText: '',
        displayDate : '',
        buttonText :'Show More'});
    function handleClick() {
        if (showAriticle.buttonText == 'Show More') {
            SetshowArticle({
                shortText: props.article.shortText,
                displayDate :props.article.displayDate,
                buttonText :'Show Less'
            });
               
        } else {
            SetshowArticle({
                shortText: '',
                displayDate: '',
                buttonText :'Show More'
            });
        }
        
    }
    //console.log(showAriticle);

    return (
        <article className = {styles.container}>
            <header> 
                <h1 className = {styles.header}>
                {props.article.title}
                </h1>
            </header>
            <p className = {styles.shortText}>{showAriticle.shortText}</p>
            <time className = {styles.time} dateTime = {props.article.timeStamp}>
                {showAriticle.displayDate}
                </time> <br />
            <p> </p>
            <ArticleTextToggleButton buttonText = {showAriticle.buttonText} onClick = {handleClick}/> 
        </article>

      );
    };

export default ArticleListItem;

