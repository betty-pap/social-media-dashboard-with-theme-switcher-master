import {statistics, overviewData} from "../data"; 
import OverviewCard from "./components/OverviewCard";
import StatCard from "./components/StatCard";
import { useState } from "react";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return(
    <div className={isDarkMode ? "dark-mode container" : "container"}>
      <div className="desktop-header">
        <div className="header">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="dark-mode-btn">
          Dark Mode
          <label className="switch">
            <input type="checkbox" onClick={() => setIsDarkMode(!isDarkMode)}/>
            <span className="slider"></span>
          </label>
        </div>
      </div>
      
      <div className="big-cards-grid">
        {statistics.map((stat, index) => (
          <StatCard key={index} stat={stat}/>
        ))}
      </div>
    
      <h4>Overview - Today</h4>

      <div className="small-cards-grid">
        {overviewData.map((item, index) => (
          <OverviewCard key={index} item={item}/>
        ))}
      </div>

    </div>
  )
}

export default App;