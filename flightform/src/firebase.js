import firebase from 'firebase'
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBm9Q-nvlj5F8xLIR87qQqJoC5Zp5g-Siw",
    authDomain: "flightform-5fe7f.firebaseapp.com",
    databaseURL: "https://flightform-5fe7f.firebaseio.com",
    projectId: "flightform-5fe7f",
    storageBucket: "flightform-5fe7f.appspot.com",
    messagingSenderId: "597965522987"
  };
  firebase.initializeApp(config);

export default firebase
