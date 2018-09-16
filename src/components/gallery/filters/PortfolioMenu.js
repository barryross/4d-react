import React from 'react'
import {portfolioFilters, portfolioControls} from '../data'
import { Button } from 'semantic-ui-react'

const PortfolioMenu =  ({toggleFilter, active}) => {
  return (
    <div  id="portfolio-menu">

        <div>
          {
portfolioControls.map((item)=>{
    return( 
   <div class="filter-preset">
 <Button onClick={()=>toggleFilter(item.label)} variant="contained" className={item.active == true ? "true" : ""} >
    <span className={item}>{item.label}</span>
  </Button>
    </div>
    )
})

          }
          
      </div>

      <div class="filters" >
        {
          portfolioFilters.map((item)=>{
            return (
            <Button onClick={()=>toggleFilter(item)} variant="contained" className={item.active == true ? "true" : ""} >
            <i class={item.icon}></i>
             <span>{item.label}</span>
            </Button>
            )
          })
        }
    </div>
      </div>
  )
}

export default PortfolioMenu