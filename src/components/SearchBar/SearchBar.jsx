import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import "./SearchBar.scss";
import { useStateValue } from "../../redux/StateProvider";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const { state, dispatch } = useStateValue();
  const { job } = state;
  const temp_category = ["Motion Graphics", "Video Editing", "Design Jobs"];

  const onTextChange = (e) => {
    const value = e.target.value;
    let regex = new RegExp(`${value}`, `i`);
    let result = temp_category.filter((item) => regex.test(item));
    setSuggestion(result);
    setText(value);
  };

  const suggestionSelected = (category) => {
    setText(category);
    setSuggestion([]);
    let regex = new RegExp(`${category}`, `i`);
    let result = [];
    result = job.filter((item) => regex.test(item.category));
    dispatch({ type: "SEARCH_RESULTS", searchResults: result });
  };

  const dispatchValue = () => {
    dispatch({ type: "SET_SUGGESTION", suggestion: text });
  };

  const closeIcon = () => {
    dispatch({ type: "SEARCH_RESULTS", searchResults: [] });
    setText("");
    setSuggestion([]);
  };

  const renderSuggestion = () => {
    if (suggestion.length === 0) {
      return null;
    }
    return (
      <div className="suggestion">
        <ul>
          {suggestion.map((category) => (
            <li
              key={category}
              onClick={(e) => {
                suggestionSelected(category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="search-container">
      <div className="searchBar">
        <div className="wrapper">
          <div className="inputContainer">
            <MdSearch className="icon" />
            <input
              className="clear"
              value={text}
              placeholder="search"
              onChange={(e) => {
                onTextChange(e);
              }}
            ></input>
          </div>
          <IoIosCloseCircle
            className="closeIcon"
            onClick={() => {
              closeIcon();
            }}
          />

          <button className="btn" onClick={() => dispatchValue()}>
            Find Job
          </button>
        </div>
      </div>
      {renderSuggestion()}
    </div>
  );
};

export default SearchBar;
