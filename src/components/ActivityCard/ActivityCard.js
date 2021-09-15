import React from "react";
import "./ActivityCard.scss";
import ellipsisIcon from "../../images/icon-ellipsis.svg";

const ActivityCard = ({ title, hours, lastWeek }) => {
  return (
    <div className="ActivityCard">
      <div className="ActivityCard__background"></div>
      <div className="ActivityCard__tile" tabIndex="0">
        <div className="ActivityCard__header">
          <h3 className="ActivityCard__title">{title}</h3>
        </div>
        <div className="ActivityCard__details">
          <p className="ActivityCard__hours">{hours}hrs</p>
          <p className="ActivityCard__lastweek">Last Week - {lastWeek}hrs</p>
        </div>
      </div>
      <button className="ActivityCard__options">
        <img src={ellipsisIcon} alt="Options" />
      </button>
    </div>
  );
};

export default ActivityCard;
