import React, { Component } from 'react';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Services from './components/services/Services'
import Timeline from './components/timeline/Timeline'
import Testimonials from './components/testimonials/Testimonials'

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
