import React, { useState, useEffect } from "react";
import "./JobCardWrapper.scss";
import JobCard from "../JobCard/JobCard";
import { useStateValue } from "../../redux/StateProvider";
import axios from "axios";

const JobCardWrapper = () => {
  //searchresult handling
  const baseURL = "http://localhost:5001";
  const { state, dispatch } = useStateValue();
  const { job, category, jobMetadata } = state;
  const categorySelector = (item) => {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  const goToNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = async () => {
    setCurrentPage(currentPage - 1);
  };

  const changePage = async (e) => {
    setCurrentPage(e.target.textContent);
  };

  const getPaginatedGroup = () => {
    let paginatedGroups = [];
    if (jobMetadata.total && jobMetadata.perPage) {
      const totalPages = jobMetadata.total % jobMetadata.perPage === 0 ? jobMetadata.total / jobMetadata.perPage : (jobMetadata.total / jobMetadata.perPage) + 1;
      paginatedGroups = new Array(totalPages).fill().map((value, index) => index + 1);
    }
    setTotalPages(paginatedGroups);
  };

  useEffect(() => {
    getPaginatedGroup();
  }, [jobMetadata]);

  useEffect(async () => {
    const jobres = await axios.get(baseURL + "/api/jobs", { headers: { pageNumber: currentPage, perPage: 2 } });
    const _job = jobres.data.data;
    dispatch({ type: "SET_JOB_DATA", job: _job });
    dispatch({ type: "SET_JOB_METADATA", jobMetadata: jobres.data.metaData });
  }, [currentPage]);


  return (
    <div className="JobCardWrapper">
      <h1>{totalPages.length}</h1>
      <h1>{currentPage}</h1>
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
        {job.map((item) => (
          <div>
            <JobCard key={item.id} item={item} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className=""
          onClick={goToPreviousPage}
          className={`prev ${currentPage == 1 ? "disabled" : ""}`}
        >
          Prev
        </button>
        {totalPages.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage == item ? "active" : null
              }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage == totalPages.length ? "disabled" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobCardWrapper;
