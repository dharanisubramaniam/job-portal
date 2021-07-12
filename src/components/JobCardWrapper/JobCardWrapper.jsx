import React, { useState, useEffect } from "react";
import "./JobCardWrapper.scss";
import JobCard from "../JobCard/JobCard";
import { useStateValue } from "../../redux/StateProvider";
import axios from "axios";
import { fetchData } from "../global/fetch";

const JobCardWrapper = () => {
  //searchresult handling
  const baseURL = "http://localhost:5001";
  const { state, dispatch } = useStateValue();
  const { job, category, jobMetadata } = state;

  useEffect(() => {
    ////console.log("jobcard wrapper useEffect called");
    fetchData(false, state, dispatch);
    // eslint-disable-next-line
  }, []);

  const categorySelector = (item) => {
    //console.log("inside jobcard wrapper categorySelector");
    let result = [];
    result = job.filter((job) => job.category_id === item.id);
    //console.log(result, "result");
    dispatch({ type: "SEARCH_RESULTS", searchResults: result });
  };
  const allSelector = () => {
    //console.log("inside jobcardwrapper allSelector");
    dispatch({ type: "SEARCH_RESULTS", searchResults: [] });
  };

  //pagination states handling
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  const goToNextPage = async () => {
    //console.log("inside jobcardwrapper setCurrentPage");
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = async () => {
    //console.log("inside jobcardwrapper setCurrentPage");
    setCurrentPage(currentPage - 1);
  };

  const changePage = async (e) => {
    //console.log("inside jobcardwrapper setCurrentPage");
    setCurrentPage(e.target.textContent);
  };

  useEffect(() => {
    //console.log("inside jobcardwrapper useeffect jobMetadata");
    const getPaginatedGroup = () => {
      //console.log("inside jobcardwrapper paginatedGroups");
      //console.log("jobMetaData: ", jobMetadata);
      let paginatedGroups = [];

      const totalPages =
        jobMetadata.total % jobMetadata.perPage === 0
          ? jobMetadata.total / jobMetadata.perPage
          : Math.ceil(jobMetadata.total / jobMetadata.perPage);
      //console.log("totalPages: ", totalPages);
      paginatedGroups = new Array(totalPages)
        .fill()
        .map((value, index) => index + 1);

      setTotalPages(paginatedGroups);
    };
    if (jobMetadata.perPage && jobMetadata.total) {
      getPaginatedGroup();
    }
  }, [jobMetadata]);

  useEffect(() => {
    //console.log("inside jobcardwrapper useeffect currentPage");

    if (currentPage !== jobMetadata.pageNumber) {
      const fetchData = async () => {
        const jobres = await axios.get(baseURL + "/api/jobs", {
          headers: { pageNumber: currentPage, perPage: 2 },
        });
        const _job = jobres.data.data;
        dispatch({ type: "SET_JOB_DATA", job: _job });
        dispatch({
          type: "SET_JOB_METADATA",
          jobMetadata: jobres.data.metaData,
        });
      };
      fetchData();
    }
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div className="JobCardWrapper">
      <div className="category-tabs">
        <p
          key={0}
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
          <div key={item.id}>
            <JobCard key={item.id} item={item} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage.toString() === "1" ? "disabled" : ""}`}
        >
          Prev
        </button>
        {totalPages.map((item) => (
          <button
            key={item}
            onClick={changePage}
            className={`paginationItem ${
              currentPage.toString() === item.toString() ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${
            currentPage.toString() === totalPages.length.toString()
              ? "disabled"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobCardWrapper;
