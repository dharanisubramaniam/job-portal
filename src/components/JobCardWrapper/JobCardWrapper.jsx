import React, { useState } from "react";
import "./JobCardWrapper.scss";
import JobCard from "../JobCard/JobCard";
import { useStateValue } from "../../redux/StateProvider";

const JobCardWrapper = ({ dataLimit, pageLimit }) => {
  //searchresult handling
  const { state, dispatch } = useStateValue();
  const { job, category, searchResults } = state;
  const categorySelector = (item) => {
    // const value = e.target.innerHTML;
    // let regex = new RegExp(`${value}`, `i`);
    console.log(item);
    let result = [];
    result = job.filter((job) => job.category_id === item.id);
    console.log(result, "result");
    dispatch({ type: "SEARCH_RESULTS", searchResults: result });
  };
  const allSelector = () => {
    dispatch({ type: "SEARCH_RESULTS", searchResults: [] });
  };

  //pagination states handling

  const [pages] = useState(Math.round(job.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const data = searchResults.length > 0 ? searchResults : job;

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="JobCardWrapper">
      <div className="category-tabs">
        <p
          onClick={() => {
            allSelector();
          }}
        >
          All
        </p>
        {category.map((item) => (
          <p
            key={item.id}
            onClick={(item) => {
              categorySelector(item);
            }}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="inner_jobCardWrapper">
        {getPaginatedData().map((item) => (
          <div>
            <JobCard key={item.id} item={item} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className=""
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>
        {getPaginatedGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobCardWrapper;
