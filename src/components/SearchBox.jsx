// src/components/SearchBox.jsx
import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
