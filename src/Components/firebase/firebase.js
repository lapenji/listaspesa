import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYOWxlNDhJ_xeH1VqwaRfs6cUJc0g40JE",
    authDomain: "lista-spesa-2744c.firebaseapp.com",
    databaseURL: "https://lista-spesa-2744c.firebaseio.com",
    projectId: "lista-spesa-2744c",
    storageBucket: "lista-spesa-2744c.appspot.com",
    messagingSenderId: "238444372920",
    appId: "1:238444372920:web:0ffea9d799c4b69a66e54d"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase