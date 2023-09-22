import React from "react";

import style from "./Card.module.css";

function ArticleCard(props) {
  return (
    <div className={style.articleCard}>
      <img className={style.articleImg} src={props.img} alt="rasm" />
      <div className={style.cardContent}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className={style.articleDate}>
          <p>{props.date}</p>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
