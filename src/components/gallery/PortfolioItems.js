import React from 'react'
import {portfolioItems} from './data'
import {filter, find, intersection} from 'lodash'

const  sizes = ["medium", "small", "small", "small", "large"];
const rnd = () => Math.floor(Math.random()*sizes.length);

const PortfolioItems =  ({showModal, setCurrentProject, filters}) => {
  let active = filters.filter((f)=>{return f.active == true}).map((f)=> f.tag);
  return (
    <div class="grid">
      {
        portfolioItems.map(item =>{
          return intersection(active, item.tags).length > 0 ? (
             <div onClick={()=>{setCurrentProject(item);}} class={"item item--"+sizes[rnd()]}>
             <img src={process.env.PUBLIC_URL + '/images/'+item.directory+"/"+item.images.primary} />
               <div class="overlay">
                <h3>{item.project}</h3>
                <IconTags tags={item.tags}/>
               </div>
             </div>
          ) : ""

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
