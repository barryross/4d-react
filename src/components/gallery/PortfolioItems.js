import React, {Component} from 'react'
import {intersection} from 'lodash'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import firebase from '../../common/firebase.js';
import { GridLoader } from 'react-spinners';


import Paper from 'material-ui/Paper';
const  sizes = ["medium", "small", "small", "small", "small"];
const rnd = () => Math.floor(Math.random()*sizes.length);

class PortfolioItems extends Component {
constructor(props){
  super(props);
  this.state = {
    portfolio: [],
    loading: true
  }

  this.portfolioRef = firebase.database().ref('portfolio/');
  this.portfolioRef.on('value', ((snapshot)=>{
      console.log("Updating", snapshot.val())
    this.setState({portfolio:snapshot.val()});
  }));

}

  render(){     
    const {showProjectDetails} = this.props
    let active = this.props.filters.filter((f)=>{return f.active == true}).map((f)=> f.tag);
    const items = this.state.portfolio.map((item, i) => {
              return item.visible && intersection(active, item.tags).length > 0 ?
              (
                <Paper 
                  zDepth={2}
                  key={item.id}
                  onClick={()=>showProjectDetails(item)}
                  class={"item item--"+sizes[rnd()]}>
                  <img src={'/images/'+item.directory+"/"+item.images.primary} />
                  <Paper zDepth={1} class="overlay">
                    <h3>{item.project}</h3>
                    {/* <IconTags tags={item.tags}/> */}
                  </Paper>
                </Paper>
            )
              : "";
          });

 
    return(


        <CSSTransitionGroup
                className="grid"
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

              {items.length > 0 && items}
              {items.length == 0 && 
              <div className="loading-spinner">
                <GridLoader
                color={"#2185d0"}
                loading={this.state.loading}/>
              </div>
              }
           
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

export default PortfolioItems;
