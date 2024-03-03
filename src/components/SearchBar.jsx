import "../styles/SearchBar.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  // const fetchData = (value) => {

  // }

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
