import React, { Component } from 'react'

import Button1 from '../../components/button/Button1';

import styles from "./home.module.css"

import homeImg from "../../assets/images/home.png"
import CallUs from '../../components/button/CallUs';

export class Home extends Component {
  render() {
    return (
      <section id={styles.home}>
        <div className={styles.homeContainer}>
          <div className={styles.homeContent}>
            <h1>Quality cleaning for your home</h1>
            <p style={{marginBottom:"40px"}}>
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className={styles.contentBottom}>
              <Button1/>
              <CallUs/>
            </div>
          </div>
          <div className={styles.homeImg}>
            <img src={homeImg} alt="img" style={{width:"100%"}}/>
          </div>
        </div>
      </section>
    );
  }
}

export default Home