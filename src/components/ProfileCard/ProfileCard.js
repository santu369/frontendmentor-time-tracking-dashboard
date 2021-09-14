import React from "react";
import userAvatar from "../../images/image-jeremy.png";
import "./ProfileCard.scss";

const ProfileCard = ({ dailyChange, selected }) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard__user">
        <div className="ProfileCard__user-img">
          <img src={userAvatar} alt="Jeremy Avatar" />
        </div>
        <div className="ProfileCard__user-details">
          <p>Report for</p>
          <h2 className="ProfileCard__user-name">Jeremy Robson</h2>
        </div>
      </div>
      <ul className="ProfileCard__filter-options">
        <li
          className={`ProfileCard__filter-option ${
            selected === "daily" ? "ProfileCard__filter-option--active" : ""
          } `}
        >
          <button
            onClick={() => {
              dailyChange("daily");
            }}
          >
            daily
          </button>
        </li>
        <li
          className={`ProfileCard__filter-option ${
            selected === "weekly" ? "ProfileCard__filter-option--active" : ""
          } `}
        >
          <button
            onClick={() => {
              dailyChange("weekly");
            }}
          >
            weekly
          </button>
        </li>
        <li
          className={`ProfileCard__filter-option ${
            selected === "monthly" ? "ProfileCard__filter-option--active" : ""
          } `}
        >
          <button
            onClick={() => {
              dailyChange("monthly");
            }}
          >
            monthly
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
