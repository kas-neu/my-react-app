import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="bar">
      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </div>
  );
}
