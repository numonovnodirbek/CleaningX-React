import React, { Component } from "react";

import styles from "./header.module.css";

import logo from "../../assets/images/IMAGE.png";
import hamburger from "../../assets/images/hamburger.svg";

export class Header extends Component {
  render() {
    return (
      <header id={styles.header}>
        <div className="container">
          <nav id={styles.navbar}>
            <div className={styles.navLeft}>
              <a href="#home">
                <img src={logo} alt="logo" />
              </a>
              <ul className={styles.menu}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#articles">Articles</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className={styles.navRight}>
              <p>Cart (0)</p>
              <button>Get a free quote</button>
              <img className={styles.hamburger} src={hamburger} alt="" />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
