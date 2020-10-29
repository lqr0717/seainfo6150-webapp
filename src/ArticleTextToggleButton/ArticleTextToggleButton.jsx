import React from "react";
import styles from "./ArticleTextToggleButton.module.css";
import PropTypes from "prop-types";

 const ArticleTextToggleButton = (props) => {
    return(
        <div>
            <button className = {styles.ToggleButton} onClick={props.onClick}>{props.buttonText}</button>
        </div>
    );
};
ArticleTextToggleButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
export default ArticleTextToggleButton;