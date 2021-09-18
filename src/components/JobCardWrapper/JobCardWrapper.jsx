import React, { useState, useEffect } from "react";
import "./JobCardWrapper.scss";
import JobCard from "../JobCard/JobCard";
import { useStateValue } from "../../redux/StateProvider";
import axios from "axios";
import { fetchData } from "../global/fetch";
import { perPage, baseURL } from "../global/config";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
// import { BsDot } from "react-icons/bs";
import MediaQuery from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      window.location.href = `${baseURL}/jobs`;
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
    dispatch({
      type: "SET_CURRENTPAGE",
      currentPage: Number(e.target.textContent),
    });
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
      window.location.href = `${baseURL}/jobs`;
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

  //carousel;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
  };

  return (
    <div className="JobCardWrapper">
      <MediaQuery maxWidth={768} minWidth={320}>
        <div className="category-tabs">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <p
                className="link"
                tabIndex="0"
                key={0}
                onClick={() => {
                  allSelector();
                }}
              >
                All
              </p>
            </SwiperSlide>

            {category.map((item) => (
              <SwiperSlide key={item.id}>
                <p
                  className="link"
                  tabIndex={item.id + 1}
                  key={item.id}
                  onClick={(e) => {
                    categorySelector(e, item);
                  }}
                >
                  {item.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="category-tabs">
          <Carousel
            infinite={true}
            containerClass="container-with-dots"
            slidesToSlide={6}
            responsive={responsive}
            transitionDuration={1000}
          >
            <p
              className="link"
              tabIndex="0"
              key={0}
              onClick={() => {
                allSelector();
              }}
            >
              All
            </p>

            {category.map((item) => (
              <p
                className="link"
                tabIndex={item.id + 1}
                key={item.id}
                onClick={(e) => {
                  categorySelector(e, item);
                }}
              >
                {item.name}
              </p>
            ))}
          </Carousel>
        </div>
      </MediaQuery>

      <div className="inner_jobCardWrapper">
        {shareResult
          ? shareResult.map((item) => <JobCard key={item.id} item={item} />)
          : job.map((item) => <JobCard key={item.id} item={item} />)}
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
