import React from "react";
// import { Link } from "react-router-dom";
import { UserIcon } from "assets";
import "./CardTitleNews.scss";

function CardTitleNews({ news }) {
  return (
    <div className="CardTitleNews">
      <div className="CardTitleNews__main">
        <div className="CardTitleNews__title">
          <p className="CardTitleNews__title--hoverText">
            <a href={news.url} target="_blank" rel="noreferrer">
              {news.title}
            </a>
          </p>
          <div className="CardTitleNews__author">
            <div className="CardTitleNews__icon">
              <UserIcon />
            </div>
            <p>{news.author ? news.author : "Anonymous"}</p>
          </div>
        </div>
        <div to={news.url} className="CardTitleNews__img">
          <a href={news.url} target="_blank" rel="noreferrer">
            <img src={news.urlToImage} alt="news" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTitleNews;
