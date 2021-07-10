import React from "react";
import "./JobCard.scss";
import { Avatar } from "@material-ui/core";

const JobCard = ({ item }) => {
  const { designation, company, experience, location, jobType, jobLink, logo } =
    item;

  return (
    <div className="jobcard">
      <div className="sectionOne">
        <Avatar className="avatar" src={logo} />
        <div className="job-company">
          <h4>{designation}</h4>
          <span>{company}</span>
        </div>
        <span className="job-timing">{jobType}</span>
      </div>
      <div className="sectionTwo">
        <div className="exp-posted one">
          <p>1 hour ago</p>
          <span>Posted</span>
        </div>
        <div className="exp-posted">
          <p>{experience} years</p>
          <span>Experience</span>
        </div>
        <div className="exp-posted">
          <p>{location}</p>
          <span>Location</span>
        </div>
      </div>
      <div className="sectionThree">
        <p>
          In a nutshell Codaholic. A graduate from the Technion, Israel
          Institute of Technology (President’s Excellence: average grade of 94).
        </p>
      </div>
      <div className="sectionFive">
        <a href={jobLink} target="_blank" rel="noreferrer">
          Apply now
        </a>
      </div>
    </div>
  );
};

export default JobCard;
