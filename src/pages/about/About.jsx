import React, { Component } from "react";
import AboutCard from "../../components/Card/Card";

import styles from "./about.module.css";

import Button1 from "../../components/button/Button1";
import Button2 from "../../components/button/Button2";

import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.png";
import img3 from "../../assets/images/about3.png";

const data = [
  {
    img: img1,
    title: "1. Schedule online",
    text: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
  },
  {
    img: img2,
    title: "2. Pay online easily",
    text: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
  },
  {
    img: img3,
    title: "3. Get your cleaned",
    text: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus.",
  },
];

export class About extends Component {
  render() {
    return (
      <section id={styles.about}>
        <div className="container">
          <div className={styles.aboutTitle}>
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className={styles.aboutCards}>
            <AboutCard
              img={data[0].img}
              title={data[0].title}
              text={data[0].text}
            />
            <AboutCard
              img={data[1].img}
              title={data[1].title}
              text={data[1].text}
            />
            <AboutCard
              img={data[2].img}
              title={data[2].title}
              text={data[2].text}
            />
          </div>
          <div className={styles.aboutBtns}>
            <Button1 />
            <Button2 />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
