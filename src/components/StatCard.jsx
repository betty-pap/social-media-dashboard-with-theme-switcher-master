import React from 'react'

const StatCard = ({stat}) => {
 

  return (
    <div>
      <div className="card-big">
        <h3>{stat.username}</h3>
        <span>{stat.number}</span>
        <h2>{stat.followers}</h2>
        <small className={ stat.statColor === 'green' ? "stat-green" : "stat-red"}>{stat.statToday}</small>
      </div>

    </div>
  )
}

export default StatCard;