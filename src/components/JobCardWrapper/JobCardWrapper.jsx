import React, { useState, useEffect, useRef } from "react";
import "./JobCardWrapper.scss";
import JobCard from "../JobCard/JobCard";
import { useStateValue } from "../../redux/StateProvider";
import axios from "axios";
import { fetchData } from "../global/fetch";
import { perPage, baseURL } from "../global/config";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";

const JobCardWrapper = ({ id }) => {
  //searchresult handling

  const { state, dispatch } = useStateValue();
  const { job, category, jobMetadata, categoryId, currentPage } = state;

  const [shareResult, setshareResult] = useState();

  //initla data fetching
  useEffect(() => {
    ////console.log("jobcard wrapper useEffect called");

    fetchData(false, state, dispatch);

    // eslint-disable-next-line
  }, []);

  //category data fetching on click

  const categorySelector = (e, item) => {
    if (id) {
      window.location.href = "http://localhost:3000/";
    }
    dispatch({ type: "SET_CURRENTPAGE", currentPage: 1 });
    console.log("inside category selector", item.id);
    dispatch({ type: "SET_CATEGORYID", categoryId: item.id });
  };
  //initial data fetching for category id

  useEffect(() => {
    if (categoryId) {
      const fetchData = async () => {
        const jobres = await axios.get(`${baseURL}/api/jobs`, {
          params: {
            id: categoryId,
            tag: "category_ids",
          },
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
    }

    // eslint-disable-next-line
  }, [categoryId]);

  const [totalPages, setTotalPages] = useState([]);

  const goToNextPage = async () => {
    //console.log("inside jobcardwrapper setCurrentPage");
    dispatch({ type: "SET_CURRENTPAGE", currentPage: currentPage + 1 });
  };

  const goToPreviousPage = async () => {
    //console.log("inside jobcardwrapper setCurrentPage");
    dispatch({ type: "SET_CURRENTPAGE", currentPage: currentPage - 1 });
  };

  const changePage = async (e) => {
    //console.log("inside jobcardwrapper setCurrentPage");
    dispatch({ type: "SET_CURRENTPAGE", currentPage: e.target.textContent });
  };

  useEffect(() => {
    // console.log("inside jobcardwrapper useeffect jobMetadata");
    const getPaginatedGroup = () => {
      // console.log("inside jobcardwrapper paginatedGroups");
      // console.log("jobMetaData: ", jobMetadata);
      let paginatedGroups = [];

      const totalPages =
        jobMetadata.total % jobMetadata.perPage === 0
          ? jobMetadata.total / jobMetadata.perPage
          : Math.ceil(jobMetadata.total / jobMetadata.perPage);
      // console.log("totalPages: ", totalPages);
      paginatedGroups = new Array(totalPages)
        .fill()
        .map((value, index) => index + 1);

      setTotalPages(paginatedGroups);
      // console.log(
      //   "paginatedgroups",
      //   totalPages,
      //   "currentpage: ",
      //   currentPage,
      //   "totalpageslength",
      //   totalPages.length
      // );
    };
    if (jobMetadata.perPage && jobMetadata.total) {
      getPaginatedGroup();
    }
  }, [jobMetadata]);

  useEffect(() => {
    if (categoryId) {
      // console.log("inside jobcardwrapper useeffect currentPage searchid");
      if (currentPage !== jobMetadata.pageNumber) {
        const fetchData = async () => {
          const jobres = await axios.get(`${baseURL}/api/jobs`, {
            headers: { pageNumber: currentPage, perPage: perPage },
            params: {
              id: categoryId,
              tag: "category_ids",
            },
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
    } else {
      if (currentPage !== jobMetadata.pageNumber) {
        const fetchData = async () => {
          const jobres = await axios.get(baseURL + "/api/jobs", {
            headers: { pageNumber: currentPage, perPage: perPage },
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
    }

    // eslint-disable-next-line
  }, [currentPage]);
  const allSelector = () => {
    if (id) {
      window.location.href = "http://localhost:3000/";
    }
    dispatch({ type: "SET_CURRENTPAGE", currentPage: 1 });
    const fetchData = async () => {
      const jobres = await axios.get(`${baseURL}/api/jobs`, {
        headers: {
          pageNumber: 1,
          perPage: perPage,
        },
      });
      const _job = jobres.data.data;
      // console.log(_job);
      dispatch({ type: "SET_JOB_DATA", job: _job });
      dispatch({
        type: "SET_JOB_METADATA",
        jobMetadata: jobres.data.metaData,
      });
    };
    fetchData();
  };

  //share api with id as argument
  if (id) {
    const fetchData = async () => {
      const jobres = await axios.get(
        `${baseURL}/api/jobs`,

        {
          params: {
            id: id,
            tag: "id",
          },
        }
      );
      setshareResult(jobres.data.data);
      dispatch({
        type: "SET_JOB_METADATA",
        jobMetadata: jobres.data.metaData,
      });
    };
    fetchData();
  }

  //carousel

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  let carouselWidth = 0;

  // const handleNavLeft = (e) => {
  //   console.log(carouselWidth);
  //   carouselWidth = carouselWidth > 1100 ? carouselWidth - 1100 : 0;
  //   trackRef.current.style.transform = `translateX(
  //       -${carouselWidth}px
  //     )`;
  // };

  // const handleNavRight = (e) => {
  //   carouselWidth = carouselWidth + carouselRef.current.offsetWidth;
  //   trackRef.current.style.transform = `translateX(
  //       -${carouselWidth}px
  //     )`;
  //   console.log(trackRef, carouselWidth);
  // };

  return (
    <div className="JobCardWrapper">
          <div className="category-tabs" ref={trackRef}>
            <p  className="link"
              tabIndex="0"
              key={0}
              onClick={() => {
                allSelector();
              }}
            >
              All
            </p>
            {category.map((item) => (
              <p  className="link"
                tabIndex={item.id + 1}
                key={item.id}
                onClick={(e) => {
                  categorySelector(e, item);
                }}
              >
                {item.name}
              </p>
            ))}
          </div>
        {/* <div className="carousel__nav">
          <IconButton
            className="prev"
            id="icon-button"
            onClick={(e) => {
              handleNavLeft(e);
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            id="icon-button"
            className="next"
            onClick={(e) => {
              handleNavRight(e);
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </div> */}

      <div className="inner_jobCardWrapper">
        {shareResult
          ? shareResult.map((item) => (
              <div key={item.id}>
                <JobCard key={item.id} item={item} />
              </div>
            ))
          : job.map((item) => (
              <div key={item.id}>
                <JobCard key={item.id} item={item} />
              </div>
            ))}
      </div>
      {totalPages.length > 1 && (
        <div className="pagination">
          <IconButton
            onClick={goToPreviousPage}
            className={`prev ${
              currentPage.toString() === "1" ? "disabled" : ""
            }`}
          >
            <ChevronLeftIcon />
          </IconButton>

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
          <IconButton
            onClick={goToNextPage}
            className={`next ${
              currentPage.toString() === totalPages.length.toString()
                ? "disabled"
                : ""
            }`}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default JobCardWrapper;
