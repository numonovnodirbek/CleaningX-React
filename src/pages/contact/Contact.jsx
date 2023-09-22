import React, { Component } from "react";

import style from "./contact.module.css";
import CallUs from "../../components/button/CallUs";
import Button2 from "../../components/button/Button2";

export class Contact extends Component {
  render() {
    return (
      <section id={style.contact}>
        <div className="container" id={style.contactContainer}>
          <div className={style.contactContent}>
            <h1>Contact Us</h1>
            <p className={style.p1}>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <CallUs />
            <hr style={{ color: "#DCDDEB", margin: "30px 0 55px" }} />
            <h2>Not convinced yet?</h2>
            <p className={style.p2}>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <Button2 />
          </div>
          <form className={style.contactForm}>
            <div className={style.inputsWrapper}>
              <div className={style.inputBox}>
                <label htmlFor="name">Full name</label>
                <input required id="name" type="text" />
              </div>
              <div className={style.inputBox}>
                <label htmlFor="phoneNumber">Phone number</label>
                <input required id="phoneNumber" type="number" />
              </div>
              <div className={style.inputBox}>
                <label htmlFor="name">Address</label>
                <input required id="address" type="text" />
              </div>
              <div className={style.inputBox}>
                <label htmlFor="email">Email</label>
                <input required id="email" type="email" />
              </div>
              <div className={style.inputBox}>
                <label htmlFor="name">Requested service</label>
                <input required id="request" type="text" />
              </div>
              <div className={style.inputBox}>
                <label htmlFor="day">Day of service</label>
                <input required id="day" type="text" />
              </div>
            </div>
            <div className={style.textarea}>
              <label htmlFor="textarea">Add a note</label>
              <textarea name="" id="textarea" cols="30" rows="10" />
            </div>
            <button type="submit">Submit message</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
