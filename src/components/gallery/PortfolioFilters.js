import React from 'react'
import {portfolioFilters} from './data'
const PortfolioFilters =  ({toggleFilter, active}) => {
  return (
    <div>
      <ul id="portfolio-filters">
        {
          portfolioFilters.map((item)=>{
            return <div onClick={()=>toggleFilter(item)} className={item.icon +" "+item.active}><span class="filter-label">{item.label}</span></div>
          })
        }
      </ul>
      </div>
  )
}

export default PortfolioFilters
