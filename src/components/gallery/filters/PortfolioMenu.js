import React from 'react'
import {icons} from '../../../common/icons'
import {portfolioControls} from '../data'
import { Button, Menu } from 'semantic-ui-react'

const PortfolioMenu =  ({toggleFilter, active}) => {
  return (
  
		<div  id="portfolio-menu">
				<Menu className={`filter-preset`}>
				{ portfolioControls.map( item =>{
							return( 
								<Menu.Item
									name={item.label}
									active={item.active === true}
									onClick={()=>toggleFilter(item)}>
										<span className={item}>{item.label}</span>
								</Menu.Item>
							)
					})}
					
					</Menu>
         <Menu className={`filters `}>
        {
          icons.map((item)=>{
            return (
            <Menu.Item
              name={item.label}
              active={item.active === true}
              onClick={()=>toggleFilter(item)}>
              <i class={item.icon}></i>
              <span className={item}>{item.label}</span>
            </Menu.Item>
            )
          })
        }
     </Menu>
    </div>
  )
}

export default PortfolioMenu