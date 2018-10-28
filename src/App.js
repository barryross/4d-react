import React, { Component } from 'react';
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Portfolio from './components/gallery/Gallery'
import Timeline from './components/timeline/Timeline'
import Footer from './components/footer/Footer'


import Testimonials from './components/testimonials/Testimonials'

import './styles/App.css';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {

  constructor(props){
    super(props)
console.log("PROCESS", process.env)
  }

  componentDidMount(){

  }
  render() {

    return (
  

      <MuiThemeProvider>
      <div className="App">
        <Header/>
        <About/>
        <Services/>
        {/* <Portfolio/> */}
        <Testimonials/>
        <Contact/>
        <Timeline/>
        <Footer/>



      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
