import React from "react";
import JobCardWrapper from "../JobCardWrapper/JobCardWrapper";

import { useParams } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
  const { id } = useParams();
  return (
    <div className="mainpage">
        <JobCardWrapper id={id} />
      </div>
  );
};

export default MainPage;
