import React from "react";

import style from "./Card.module.css";

function ServiceCard(props) {
  return (
    <div className={style.serviceCard}>
      <img src={props.img} alt="rasm" />
      <div className={style.serviceCardContent}>
        <h3>{props.title}</h3>
      <p>{props.text}</p>
      </div>
      
    </div>
  );
}
export default ServiceCard;
