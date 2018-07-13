import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Portfolio from './components/gallery/Gallery'
import Testimonials from './components/testimonials/Testimonials'
import firebase from '@firebase/app';

import '@firebase/firestore';
import '@firebase/storage';

import { FirestoreProvider } from 'react-firestore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const config = {
  projectId: 'd-media-e0101',
  apiKey: 'AIzaSyBpxtiGhI-rfnfXSMzDxzBBRosRJI0iJhg',
  storageBucket: "d-media-e0101.appspot.com"
};
firebase.initializeApp(config);
const storage = firebase.storage()

console.log("FIREBASE",storage)
class App extends Component {
  render() {
    return (
      <FirestoreProvider firebase={firebase}>

      <MuiThemeProvider>
      <div className="App">
        <Header/>
        <Services/>
        {/* <Testimonials/> */}
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    </MuiThemeProvider>
    </FirestoreProvider>
    );
  }
}

export default App;
