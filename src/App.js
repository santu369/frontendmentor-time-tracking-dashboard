import { useState, useEffect } from "react";

import "./App.scss";
import { activityData } from "./data.js";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ActivityCard from "./components/ActivityCard/ActivityCard";

function App() {
  const [filter, setFilter] = useState("weekly");
  const [selected, setSelected] = useState("weekly");
  useEffect(() => {
    setFilter("weekly");
    setSelected("weekly");
  }, []);

  const dailyChange = (change) => {
    setFilter(change);
    setSelected(change);
  };
  return (
    <>
      <main className="App app-animate">
        <h1 className="sr-only">Time Tracking Dashboard</h1>
        <ProfileCard dailyChange={dailyChange} selected={selected} />
        {activityData.map((activity, index) => {
          return (
            <ActivityCard
              key={index}
              title={activity.title}
              hours={
                filter === "weekly"
                  ? activity.timeframes.weekly.current
                  : filter === "monthly"
                  ? activity.timeframes.monthly.current
                  : filter === "daily"
                  ? activity.timeframes.daily.current
                  : 0
              }
              lastWeek={
                filter === "weekly"
                  ? activity.timeframes.weekly.previous
                  : filter === "monthly"
                  ? activity.timeframes.monthly.previous
                  : filter === "daily"
                  ? activity.timeframes.daily.previous
                  : 0
              }
            />
          );
        })}
      </main>
      <footer className="footer">
        <p>
          Challenge by
          <a
            href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by
          <a
            className="footer__link"
            href="https://twitter.com/santu69"
            rel="noopener noreferrer"
            target="_blank"
          >
            Shiva Santosh Jana
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
