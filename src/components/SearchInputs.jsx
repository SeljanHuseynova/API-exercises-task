import React from "react";
import Spinner from "./Spinner";

const SearchInputs = ({ data, loading }) => {
  return (
    <div className="search-results-container">
      {loading ? (
        <Spinner/>
      ) : (
        <ul>
          {data.map((el) => (
            <li key={el.score}>{el.word}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInputs;
