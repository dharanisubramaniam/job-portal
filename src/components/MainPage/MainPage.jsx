import React from "react";
import JobCardWrapper from "../JobCardWrapper/JobCardWrapper";

import { useParams } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
  const { id } = useParams();
  return (
    <div className="mainpage">
      <div className="intro-1">
        <JobCardWrapper id={id} />
      </div>
    </div>
  );
};

export default MainPage;
