import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Gallery from './components/gallery/Gallery'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Header/>
        <About/>
        <Services/>
        <Gallery/>
        <Contact/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
