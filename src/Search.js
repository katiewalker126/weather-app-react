import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a town or city"
          autoComplete="off"
          autoFocus="on"
          className="search-text-input"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
