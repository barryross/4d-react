// Import the Firebase modules that you need in your app.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyBpxtiGhI-rfnfXSMzDxzBBRosRJI0iJhg",
  authDomain: "d-media-e0101.firebaseapp.com",
  databaseURL: "https://d-media-e0101.firebaseio.com",
  projectId: "d-media-e0101",
  storageBucket: "d-media-e0101.appspot.com",
  messagingSenderId: "591493942253"
};
export default firebase.initializeApp(config);