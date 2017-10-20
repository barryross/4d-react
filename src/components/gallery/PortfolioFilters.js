import React from 'react'
import {portfolioFilters} from './data'
const PortfolioFilters =  ({toggleFilter, active}) => {
  return (
    <div>
      <h3>sdfds</h3>

      <ul id="portfolio-filters">
        {
          portfolioFilters.map((item)=>{
            return <span onClick={()=>toggleFilter(item)} className={item.icon +" "+item.active}>{item.label}</span>
          })
        }
      </ul>
      </div>
  )
}

export default PortfolioFilters
