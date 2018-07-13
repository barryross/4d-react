import React, {Component} from 'react'
import {portfolioItems} from './data'
import {intersection} from 'lodash'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Paper from 'material-ui/Paper';
import { FirestoreCollection, withFirestore } from 'react-firestore';
const  sizes = ["medium", "small", "small", "small", "small"];
const rnd = () => Math.floor(Math.random()*sizes.length);
class PortfolioItems extends Component {
constructor(props){
  super(props);


}

  render(){
let storage = this.props.firestore.app.storage()


console.log(storage.refFromURL("gs://d-media-e0101.appspot.com/flood.jpg").getDownloadURL().then((item)=>{
console.log("ITEM", this.props.firestore)
}))
    // console.log("PORTFOLIO ITEMS",portfolioItems, this.props.filters )
    let active = this.props.filters.filter((f)=>{return f.active == true}).map((f)=> f.tag);
    // const items = portfolioItems.map((item, i) => {
    // return  intersection(active, item.tags).length > 0 ?

    //       (
    //         <Paper 
    //             zDepth={2}
    //           key={item.id}
    //           onClick={()=>{this.props.setCurrentProject(item);}}
    //           class={"item item--"+sizes[rnd()]}>
    //               <img src={process.env.PUBLIC_URL + '/images/'+item.directory+"/"+item.images.primary} />
    //           <Paper zDepth={1} class="overlay">
    //                  <h3>{item.project}</h3>
    //                  <IconTags tags={item.tags}/>
    //                 </Paper>
    //             </Paper>

    //     )
    //       : "";

    //   });
 
    return(


        <CSSTransitionGroup
                className="grid"
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

                    {/* {items} */}
                    <FirestoreCollection
                      path="/portfolio"
                      render={({data}) => {
                        // console.log("DATA", data.JSON())

                       return  !data ? "" : 
                        data.map((item)=>{
                          // var screenshot = ""
                          // storage.refFromURL(item.screenshots[0]).getDownloadURL().then((item)=>{
                          //      screenshot = item;
                          // })
                          return (
                            <Paper 
                              zDepth={2}
                              key={item.id}
                              onClick={()=>{this.props.setCurrentProject(item);}}
                             class={"item item--"+sizes[rnd()]}>
                                <img src={process.env.PUBLIC_URL + "/images/"+item.directory+"/"+ item.thumbnail} />
                            <Paper zDepth={1} class="overlay">
                                    <h3>{item.project}</h3>
                                    <IconTags tags={item.tags}/>
                                  </Paper>
                              </Paper>
                          )
                        })

                            //         <Paper 
    //             zDepth={2}
    //           key={item.id}
    //           onClick={()=>{this.props.setCurrentProject(item);}}
    //           class={"item item--"+sizes[rnd()]}>
    //               <img src={process.env.PUBLIC_URL + '/images/'+item.directory+"/"+item.images.primary} />
    //           <Paper zDepth={1} class="overlay">
    //                  <h3>{item.project}</h3>
    //                  <IconTags tags={item.tags}/>
    //                 </Paper>
    //             </Paper>
            
                      }}
                    />

              </CSSTransitionGroup>

    )
  }




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

export default withFirestore(PortfolioItems);
