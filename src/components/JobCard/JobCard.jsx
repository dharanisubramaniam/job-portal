import React from "react";
import "./JobCard.scss";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../redux/StateProvider";

const JobCard = ({ item }) => {
  const { state } = useStateValue();
  const { location, company, jobType } = state;
  const {
    designation,
    company_id,
    location_id,
    job_type_id,
    salary,
    min_experience,
    max_experience,
    job_link,
  } = item;

  return (
    <div className="jobcard">
      <div className="sectionOne">
        {company.map(
          (company) =>
            company.id === company_id && (
              <Avatar key={company.id} className="avatar" src={company.logo} />
            )
        )}

        <div className="job-company">
          <h4>{designation}</h4>
          {company.map(
            (company) =>
              company.id === company_id && (
                <span key={company.id}>{company.name}</span>
              )
          )}
        </div>
        {jobType.map(
          (jobType) =>
            jobType.id === job_type_id && (
              <span key={jobType.id}>{jobType.name}</span>
            )
        )}
      </div>
      <div className="sectionTwo">
        <div className="exp-posted one">
          <p>1 hour ago</p>
          <span>Posted</span>
        </div>
        <div className="exp-posted">
          <p>
            {min_experience} - {max_experience}years
          </p>
          <span>Experience</span>
        </div>
        <div className="exp-posted">
          {location.map(
            (location) =>
              location.id === location_id && (
                <p key={location.id}>{location.name}</p>
              )
          )}

          <span>Location</span>
        </div>
      </div>
      {/* <div className="sectionThree">
        <p>
          In a nutshell Codaholic. A graduate from the Technion, Israel
          Institute of Technology (President’s Excellence: average grade of 94).
        </p>
      </div> */}
      <div className="sectionFive">
        <a href={job_link} target="_blank" rel="noreferrer">
          Apply now
        </a>
      </div>
    </div>
  );
};

export default JobCard;
