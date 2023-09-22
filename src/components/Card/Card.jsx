import React from "react";

import style from "./Card.module.css";

function AboutCard(props) {
  return (
    <div className={style.Card}>
      <img src={props.img} alt="rasm" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}



export default AboutCard;
