import React from "react";
import { SlOptions } from "react-icons/sl";
import { BiSolidShareAlt } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiBagSimple } from "react-icons/pi";

export const PostCard = (props) => {
  const {
    poster,
    heading,
    companyName,
    date,
    articleType,
    location,
    subText,
    authorName,
    authorProfilePic,
    url,
    views,
  } = props.info;

  return (
    <div className="single-card">
      <div>
        {poster !== null ? (
          <img src={poster} alt={heading} className="card-poster" />
        ) : (
          ""
        )}
      </div>
      <div className="card-data">
        <p className="card-type">{articleType}</p>
        <div className="card-heading">
          <p>{heading}</p>
          <div className="card-options">
            <SlOptions className="options-btn" />
            <div className="card-dropdown-options">
              <p>Edit</p>
              <p>Report</p>
              <p>Option 3</p>
            </div>
          </div>
        </div>
        {location !== null ? (
          <div
            className={`card-post-info ${companyName !== null ? "extra" : ""}`}
          >
            {date !== null ? (
              <p>
                <BsCalendarEvent className="card-calender-icon" />
                {date}
              </p>
            ) : null}
            {companyName !== null ? (
              <p>
                <PiBagSimple className="card-calender-icon" />
                {companyName}
              </p>
            ) : null}
            <span>
              <MdOutlineLocationOn className="card-location-icon" />
              {location}
            </span>
          </div>
        ) : null}
        <div>
          <p className="card-subtext">{subText}</p>
        </div>
        {url !== null ? (
          <a
            href="#"
            className={`card-url-btn ${
              String(url).includes("Visit") == true ? "visit-url" : ""
            }`}
          >
            {url}
          </a>
        ) : null}
        <div className="card-author-info">
          <div className="author-img-name">
            <img
              src={authorProfilePic}
              alt={authorName}
              className="author-img"
            />
            <p className="author-name">
              {authorName}
              <span>{views} views</span>
            </p>
          </div>
          <div className="card-meta">
            <p>
              <AiOutlineEye className="card-seen" />
              {views} views
            </p>
            <div>
              <BiSolidShareAlt className="card-share-icon" />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
