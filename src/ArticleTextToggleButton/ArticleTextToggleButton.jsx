import React from "react";
import styles from "./ArticleTextToggleButton.module.css";

 const ArticleTextToggleButton = ({buttonText, onClick}) => {
    return(
        <div>
            <button className = {styles.ToggleButton} onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default ArticleTextToggleButton;