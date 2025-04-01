import {statistics, overviewData} from "./data"; 
import OverviewCard from "./components/OverviewCard";
import StatCard from "./components/StatCard";


function App() {
  

  return(
    <div>
      <div className="header">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>

      <button>Dark Mode</button>

      {statistics.map((stat, index) => (  
        <StatCard key={index} stat={stat} />
      ))}
    
      <h4>Overview - Today</h4>

      {overviewData.map((item, index) => (
        <OverviewCard key={index} item={item}/>
      ))}
      

    </div>
  )
}

export default App;