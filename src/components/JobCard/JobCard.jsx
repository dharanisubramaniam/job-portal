import React, { useState } from "react";
import "./JobCard.scss";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../redux/StateProvider";
import { RiShareForwardFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "reactjs-popup";
import { baseURL } from "../global/config";
// import "reactjs-popup/dist/index.css";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const JobCard = ({ item }) => {
  const { state } = useStateValue();
  const { location, company, jobType, category } = state;

  const {
    designation,
    company_id,
    location_ids,
    job_type_ids,
    min_experience,
    max_experience,
    job_link,
    last_updated,
    id,
    category_ids,
  } = item;
  const copiedURL = `${baseURL}/jobs/${id}`;
  const [copy, setCopy] = useState({
    copied: false,
    value: copiedURL,
  });

  // const shareClick = (id) => {
  //   console.log("inside share click", id);
  //   setCopy({ value: `${window.location.href}${id}` });

  //   // window.open(`${window.location.href}${id}`);
  // };

  let today = new Date();
  let temp = new Date(last_updated.slice(0, 10));

  const getDifferenceInDays = (today, temp) => {
    let diffInMs = today - temp;
    diffInMs = diffInMs / (1000 * 60 * 60 * 24);
    return Math.floor(diffInMs);
  };
  const lastUpdated = getDifferenceInDays(today, temp);

  return (
    <div className="jobCardWrapper">
      <div className="jobcard">
        <div className="sectionOne">
          {company.map(
            (company) =>
              company.id === company_id && (
                <Avatar
                  key={company.id}
                  src={company.logo}
                  className="avatar"
                />
              )
          )}
        </div>
        <div className="sectionTwo">
          <div className="sectionTwo-row1">
            {company.map(
              (company) =>
                company.id === company_id && (
                  <div className="job-company" key={company.id}>
                    <span key={company.id}>{company.name}</span>
                    <p>{designation}</p>
                  </div>
                )
            )}

            <div className="location">
              {location
                .filter((location) => location_ids.includes(location.id))
                .map((location, index) => (
                  <span key={location.id}>
                    {(index ? ", " : "") + location.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="sectionTwo-row2">
            <div className="wrapper">
              <p>Exp</p>
              <span>
                {min_experience} - {max_experience} years
              </span>
            </div>
            <div className="wrapper">
              <p>Type</p>
              {jobType
                .filter((jobType) => job_type_ids.includes(jobType.id))
                .map((jobType, index) => (
                  <span key={jobType.id}>
                    {(index ? " / " : "") + jobType.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="sectionTwo-row3">
            {category
              .filter((category) => category_ids.includes(category.id))
              .map((category) => (
                <p key={category.id}>{category.name}</p>
              ))}
          </div>
        </div>
        <div className="sectionThree">
          <div className="apply-now">
            <a href={job_link} target="_blank" rel="noreferrer">
              Apply now
            </a>
          </div>

          <Popup
            className="my-popup"
            trigger={
              <div className="share">
                <span>Share</span>
                <RiShareForwardFill className="share-icon" />
              </div>
            }
            position="right center"
          >
            <CopyToClipboard
              text={copy.value}
              onCopy={() => setCopy({ copied: true })}
            >
              <div className="iconWrapper">
                <MdContentCopy className="popup-icon" />
                <span>Copy link</span>
              </div>
            </CopyToClipboard>
            <FacebookShareButton
              url={copiedURL}
              quote="shareURL"
              className="popup-icon"
            >
              <div className="iconWrapper">
                <FacebookIcon size={32} round />
                <span>Facebook</span>
              </div>
            </FacebookShareButton>
            <WhatsappShareButton
              url={copiedURL}
              quote="shareURL"
              className="popup-icon"
            >
              <div className="iconWrapper">
                <WhatsappIcon size={32} round />
                <span>Whatsapp</span>
              </div>
            </WhatsappShareButton>
            {copy.copied ? <span className="copied">Copied.</span> : null}
          </Popup>
        </div>
      </div>
      <div className="last-updated">
        <span>
          {lastUpdated > 0
            ? lastUpdated === 1
              ? `Updated yesterday`
              : `Updated ${lastUpdated} days ago`
            : ` Updated today`}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
