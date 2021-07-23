import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import "./SearchBar.scss";
import { useStateValue } from "../../redux/StateProvider";
import axios from "axios";
import { perPage, baseURL } from "../global/config";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  //updating category id from suggestion selected
  const [categoryId, setcategoryId] = useState(null);
  const { state, dispatch } = useStateValue();
  const { category } = state;

  const onTextChange = (e) => {
    const value = e.target.value;
    let regex = new RegExp(`${value}`, `i`);
    let result = category.filter((item) => regex.test(item.name));
    console.log(result);
    setSuggestion(result);
    setText(value);
  };

  const suggestionSelected = (category) => {
    // console.log(categoryId, "1st");
    dispatch({ type: "SET_CURRENTPAGE", currentPage: 1 });
    setText(category.name);
    setSuggestion([]);

    setcategoryId(category.id);
    // console.log(categoryId, "2nd");
  };

  const dispatchValue = (categoryId) => {
    console.log("inside dispatch value", categoryId);
    dispatch({ type: "SET_CATEGORYID", categoryId: categoryId });
  };

  const closeIcon = () => {
    dispatch({ type: "SET_CURRENTPAGE", currentPage: 1 });
    const fetchData = async () => {
      const jobres = await axios.get(`${baseURL}/api/jobs`, {
        headers: {
          pageNumber: 1,
          perPage: perPage,
        },
      });
      const _job = jobres.data.data;
      console.log(_job);
      dispatch({ type: "SET_JOB_DATA", job: _job });
      dispatch({
        type: "SET_JOB_METADATA",
        jobMetadata: jobres.data.metaData,
      });
    };
    fetchData();
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
              key={category.id}
              onClick={(e) => {
                suggestionSelected(category);
              }}
            >
              {category.name}
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

          <button className="btn" onClick={() => dispatchValue(categoryId)}>
            Find Job
          </button>
        </div>
      </div>
      {renderSuggestion()}
    </div>
  );
};

export default SearchBar;
