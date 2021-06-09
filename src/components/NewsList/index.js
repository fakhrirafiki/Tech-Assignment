import React from "react";
// import Button from "components/Button";
import NewsContainer from "components/Containers/NewsContainer";

function NewsList() {
  const business = {
    country: "us",
    category: "business",
    pageSize: 5,
  };

  const entertainment = {
    country: "us",
    category: "entertainment",
    pageSize: 5,
  };

  const general = {
    country: "us",
    category: "general",
    pageSize: 5,
  };

  const health = {
    country: "us",
    category: "health",
    pageSize: 5,
  };

  const science = {
    country: "us",
    category: "science",
    pageSize: 5,
  };

  const sports = {
    country: "us",
    category: "sports",
    pageSize: 5,
  };

  const technology = {
    country: "us",
    category: "technology",
    pageSize: 5,
  };

  return (
    <>
      <NewsContainer newsParams={business} />
      <NewsContainer newsParams={entertainment} />
      <NewsContainer newsParams={general} />
      <NewsContainer newsParams={health} />
      <NewsContainer newsParams={science} />
      <NewsContainer newsParams={sports} />
      <NewsContainer newsParams={technology} />
    </>
  );
}

export default NewsList;
