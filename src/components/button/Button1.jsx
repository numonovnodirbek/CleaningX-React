import React, { Component } from "react";
import style from "./buttonsStyle.module.css"

export class Button1 extends Component {
  render() {
    let btnText = "Get a free quote";
    return (
      <button className={style.button1}>
        {btnText}
      </button>
    );
  }
}

export default Button1;
