import React, { useState, useEffect } from "react";
import axios from "config/Axios";
import { Link } from "react-router-dom";
import CardTitleNews from "../../CardTitleNews";
import "./NewsContainer.css";

function HomePageNewsContainer() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newsParams, setNewsParams] = useState({
    country: "us",
    pageSize: 5,
    page: 1,
  });

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`top-headlines`, {
        params: newsParams,
      });
      setNews((prevNews) => [...prevNews, ...data.articles]);
      setIsLoading(false);
      return data;
    };

    fetchNews();
  }, [newsParams]);

  const handleSeeMore = () => {
    setIsLoading(true);
    setNewsParams({
      ...newsParams,
      page: newsParams.page + 1,
    });
  };

  return (
    <div className="NewsContainer">
      <Link to={`/${newsParams?.category}`}>
        <h2 className="NewsContainer__heading">HEADLINES</h2>
      </Link>
      <hr className="NewsContainer__hr" />
      {isLoading && newsParams.page === 1 && <p className="loading">Loading...</p>}
      <div>{news.length > 0 && news.map((news, index) => <CardTitleNews key={news.publishedAt + index} news={news} />)}</div>
      <div className="NewsContainer__seeMore">
        <p onClick={handleSeeMore}>{isLoading ? "LOADING..." : "SEE MORE >>"}</p>
      </div>
    </div>
  );
}

export default HomePageNewsContainer;
