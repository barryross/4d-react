import React from 'react'
import {portfolioFilters} from './data'
import { Button } from 'semantic-ui-react'

const PortfolioFilters =  ({toggleFilter, active}) => {
  return (
    <div>
      <div id="portfolio-filters">

        <Button attached="top" circular icon='settings' />
      <Button attached="bottom" circular icon='settings' />



        {
          portfolioFilters.map((item)=>{
            return <div onClick={()=>toggleFilter(item)} className={item.icon +" "+item.active}><span class="filter-label">{item.label}</span></div>
          })
        }
      </div>
      </div>
  )
}

export default PortfolioFilters
