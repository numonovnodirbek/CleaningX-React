import React, { Component } from "react";

import style from "./article.module.css";
import Button1 from "../../components/button/Button1";
import Button2 from "../../components/button/Button2";

import img1 from "../../assets/images/article1.png";
import img2 from "../../assets/images/article2.png";
import ArticleCard from "../../components/Card/ArticleCard";

const data = [
  {
    img: img1,
    title: "8 best vacuum cleaners to clean any mess for your home in 2022",
    text: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
    date: "Jan 28, 2022",
  },
  {
    img: img2,
    title: "How to properly disinfect your phone and other electronics",
    text: "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
    date: "Feb 1, 2022",
  },
];

export class Articles extends Component {
  render() {
    return (
      <section id={style.articles}>
        <div className="container">
          <div className={style.articlesTop}>
            <h1>Articles & resources</h1>
            <div className={style.articleBtns}>
              <Button1 />
              <Button2 />
            </div>
          </div>
          <div className={style.articleCards}>
            <ArticleCard
              img={data[0].img}
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
            <ArticleCard
              img={data[1].img}
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
