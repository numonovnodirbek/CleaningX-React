import React, { Component } from "react";
import ServiceCard from "../../components/Card/ServiceCard";
import Button2 from "../../components/button/Button2";
import style from "./services.module.css";

import img1 from "../../assets/images/service1.png";
import img2 from "../../assets/images/service2.png";
import img3 from "../../assets/images/service3.png";

const data = [
  {
    img: img1,
    title: "House cleaning",
    text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
  },
  {
    img: img2,
    title: "Office cleaning",
    text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
  },
  {
    img: img3,
    title: "Industrial cleaning",
    text: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
  },
];

export class Services extends Component {
  render() {
    return (
      <section id={style.service}>
        <div className="container">
          <div className={style.serviceTop}>
            <h1>Our Services</h1>
            <Button2 />
          </div>
          <div className={style.serviceCards}>
            <ServiceCard
              img={data[0].img}
              title={data[0].title}
              text={data[0].text}
            />
            <ServiceCard
              img={data[1].img}
              title={data[1].title}
              text={data[1].text}
            />
            <ServiceCard
              img={data[2].img}
              title={data[2].title}
              text={data[2].text}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
