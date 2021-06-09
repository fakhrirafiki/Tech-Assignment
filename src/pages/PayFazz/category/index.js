import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "config/Axios";

import "./category.scss";

import CardTitleNews from "components/CardTitleNews";

function CategoryPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");
  const { category, search } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchNews = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(`top-headlines`, {
          params: {
            category: search ? "" : category,
            country: "us",
            q: search,
          },
        });
        setNews(data.articles);
        setIsLoading(false);
        return data;
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.error(error);
      }
    };

    fetchNews();
  }, [category, search]);

  return (
    <div className="CategoryPage">
      <h2 className="CategoryPage__heading">{category?.toUpperCase()}</h2>
      {search && (
        <h2 className="CategoryPage__heading">
          Result for: {search?.toUpperCase()}
        </h2>
      )}
      {isError && <p className="error">Ouups...! Something went wrong</p>}
      {isLoading && <p className="loading">Loading...</p>}

      {!isLoading && (
        <div className="CategoryPage__newsWrapper">
          {news.length > 0 &&
            news.map((news, index) => (
              <CardTitleNews key={news.publishedAt + index} news={news} />
            ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
