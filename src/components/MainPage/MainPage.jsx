import React from "react";
import JobCardWrapper from "../JobCardWrapper/JobCardWrapper";
import Info from "../Info/Info";
import SearchBar from "../SearchBar/SearchBar";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="intro">
        <Info />
        <SearchBar />
      </div>
      <div className="intro-1">
        <JobCardWrapper />
      </div>
    </div>
  );
};

export default MainPage;
