import React from 'react'
import {portfolioItems} from './data'

const  sizes = ["medium", "small", "small", "small"];
const rnd = () => Math.floor(Math.random()*sizes.length);

const PortfolioItems =  () => {
  return (
    <div class="grid">
      {
        portfolioItems.map((item)=>{
          return (
             <div class={"item item--"+sizes[rnd()]}>
             <img src={process.env.PUBLIC_URL + '/images/'+item.directory+"/"+item.images.primary} />
               <div class="overlay">
                <h3>{item.project}</h3>  
                <IconTags tags={item.tags}/>
               </div>
             </div>
          )
          
        })
      }
   </div>
  )
}

const IconTags = ({tags}) => {
  // alert(tags)
  return(
    <div class='tag-set'>
      {
        tags.map((tag)=><icon class={"icon-"+tag}></icon>)
      }
    </div>
  )
  
}


export default PortfolioItems
