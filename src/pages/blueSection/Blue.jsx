import React, { Component } from 'react'

import style from "./blue.module.css"
import img from "../../assets/images/blueSec.png"
import Button1 from '../../components/button/Button1';
import CallUs from '../../components/button/CallUs';


export class Blue extends Component {
  render() {
    return (
      <section id={style.blueSec}>
        <div className="container" id={style.blueContainer}>
          <img className={style.blueImg} src={img} alt="img" />
          <div className={style.blueContent}>
            <h4>Covid-19 sanitization</h4>
            <h1>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={style.contentBottom}>
              <Button1/>
              <CallUs/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blue