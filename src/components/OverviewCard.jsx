import React from 'react'

const OverviewCard = ({item}) => {
  return (
    <div>
      <div className="card-small">
        <h3>{item.title}</h3>
        <span>{item.number}</span>
        <small className={item.changeColor === "green" ? "stat-green": "stat-red"}>{item.change}</small>
      </div>

    </div>
  )
}

export default OverviewCard;