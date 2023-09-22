import React, { Component } from "react";
import {
  Instagram,
  Telegram,
  Facebook,
  Twitter,
  Linkedin,
} from "react-bootstrap-icons";

import style from "./footer.module.css";
import Button1 from "../button/Button1";

import logo from "../../assets/images/IMAGE.png";

export class Footer extends Component {
  render() {
    return (
      <footer id={style.footer}>
        <div className="container" id={style.f1Container}>
          <div className={style.footerConent}>
            <h2>Quality cleaning for your home</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <br />
            <div className={style.media}>
              <Instagram />
              <Telegram />
              <Facebook />
              <Twitter />
              <Linkedin />
            </div>
          </div>
          <div className={style.footerConent}>
            <h3>Contact us</h3>
            <br />
            <br />
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <br />
            <p>(414) 567 - 2109</p>
            <br />
            <p>contact@cleaning.com</p>
          </div>
          <div className={style.footerConent}>
            <h3>Hours</h3>
            <br />
            <br />
            <h3>Monday to Friday</h3>
            <p>6:00 AM - 9:00 PM</p>
            <br />
            <h3>Saturday & Sunday</h3>
            <p>8:00 AM - 8:00 PM</p>
          </div>
          <div className={style.footerConent}>
            <h3>Get a free estimate</h3>
            <br />
            <br />
            <h2>(414) 567 - 2109</h2>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <br />
            <Button1 />
          </div>
        </div>
        <div className="container" id={style.f2Container}>
          <img src={logo} alt="logo" />
          <p className={style.copyright}>
            Copyright © Cleaning X | Designed by <span>Nodirbek Developer</span>-
            Powered by
            <span>  Nodirbek - Licenses</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
