import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewsContainer.scss";
import axios from "config/Axios";
import CardTitleNews from "../../CardTitleNews";

function NewsContainer({ newsParams }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`top-headlines`, {
        params: newsParams,
      });
      setNews(data.articles);
      return data;
    };

    fetchNews();
    setIsLoading(false);
  }, [newsParams]);

  return (
    <div className="NewsContainer">
      <Link to={`/${newsParams?.category}`}>
        <h2 className="NewsContainer__heading">
          {newsParams?.category?.toUpperCase()}
        </h2>
      </Link>
      <hr className="NewsContainer__hr" />
      {isLoading && <p className="loading">Loading...</p>}
      <div>
        {news.length > 0 &&
          news.map((news) => (
            <CardTitleNews key={news.publishedAt} news={news} />
          ))}
      </div>
      <div className="NewsContainer__seeMore">
        <Link to={`/${newsParams?.category}`}>SEE MORE {">>"}</Link>
      </div>
    </div>
  );
}

export default NewsContainer;
