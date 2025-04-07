import React from 'react'

const OverviewCard = ({item}) => {
  return (
    <div>
      <div className="card-small">
        <div className="left-side">
          <h3>{item.title}</h3>
          <span>{item.number}</span>
        </div>
        <div className="right-side">
          <img src={item.logo} alt="logo"/>
          <small className={item.changeColor === "green" ? "stat-green": "stat-red"}>{item.change}</small>
        </div>
      </div>

    </div>
  )
}

export default OverviewCard;