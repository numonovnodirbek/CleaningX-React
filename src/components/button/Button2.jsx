import React, { Component } from "react";

import style from "./buttonsStyle.module.css";

export class Button2 extends Component {
  render() {
    let btnText = "Explore services";
    return <button className={style.button2}>{btnText}</button>;
  }
}

export default Button2;
