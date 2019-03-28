import React, { Component } from 'react';
import About from './components/About/'
import Contact from './components/Contact/'
import Footer from './components/Footer/'
import Header from './components/Header'
import Services from './components/Services/'
import Timeline from './components/Timeline/'
import Testimonials from './components/Testimonials/'

import './styles/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<div className="App">
					<Header/>
					<About/>
					<Services/>
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
