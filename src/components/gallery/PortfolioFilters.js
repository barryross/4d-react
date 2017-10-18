import React from 'react'
import {portfolioFilters} from './data'
const PortfolioFilters =  () => {
  return (
    <ul id="portfolio-filters">
      {
        portfolioFilters.map((item)=>{
          return <span className={item.icon}>{item.label}</span>
        })
      }
    </ul>
  )
}

export default PortfolioFilters
