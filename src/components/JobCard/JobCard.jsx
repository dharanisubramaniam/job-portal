import React, { useState } from "react";
import "./JobCard.scss";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../redux/StateProvider";
import { RiShareForwardFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Popup from "reactjs-popup";
import { baseURL } from "../global/config";
import MediaQuery from "react-responsive";
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
    <div className="jobcard">
      <div className="jobcard-content">
        <div className="jobcard-sectionOne">
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
        <div className="jobcard-sectionTwo">
          <div className="sectionTwo-row1">
            {company.map(
              (company) =>
                company.id === company_id && (
                  <div key={company.id}>
                    <p className="company" key={company.id}>
                      {company.name}
                    </p>
                    <p className="designation">{designation}</p>
                  </div>
                )
            )}
            <div className="locationWrapper">
              {location
                .filter((location) => location_ids.includes(location.id))
                .map((location, index) => (
                  <p key={location.id} className="location">
                    {(index ? ", " : "") + location.name}
                  </p>
                ))}
            </div>
          </div>
          <div className="sectionTwo-row2">
            <div className="wrapper">
              <p>Experience</p>
              <span>
                {min_experience} - {max_experience} years
              </span>
            </div>
            <div className="wrapper">
              <p>Job Type</p>
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
        <div className="jobcard-sectionThree">
          <a href={job_link} target="_blank" rel="noreferrer" className="link">
            Apply now
          </a>
          <MediaQuery minWidth={320} maxWidth={760}>
            <PopupWrapper position="top center" id={id} />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <PopupWrapper position="right center" id={id} />
          </MediaQuery>
        </div>
      </div>
      <p className="lastUpdated">
        {lastUpdated > 0
          ? lastUpdated === 1
            ? `Updated yesterday`
            : `Updated ${lastUpdated} days ago`
          : ` Updated today`}
      </p>
    </div>
  );
};

export default JobCard;

function PopupWrapper({ position, id }) {
  const copiedURL = `${baseURL}/jobs/${id}`;
  const [copy, setCopy] = useState({
    copied: false,
    value: copiedURL,
  });
  return (
    <Popup
      className="my-popup"
      trigger={
        <div className="share">
          <span>Share</span>
          <RiShareForwardFill className="share-icon" />
        </div>
      }
      position={position}
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
  );
}
