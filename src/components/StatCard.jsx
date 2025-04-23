import React from 'react'

const StatCard = ({stat}) => {

  return (
    <div className={` ${stat.pattern} card-big`}>
      <div className="user">
        <img src={stat.logo} alt={stat.logo} />
        <h3>{stat.username}</h3>
      </div>
      <span>{stat.number}</span>
      <h2>{stat.followers}</h2>
      <small className={ stat.statColor === 'green' ? "stat-green" : "stat-red"}>{stat.statToday}</small>
    </div>

    
  )
}

export default StatCard;