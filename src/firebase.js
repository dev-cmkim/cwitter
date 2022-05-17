import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



// Your web app's Firebase configuration
 const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    // appId: process.env.REACT_APP_APP_ID,
    apiKey: "AIzaSyAM40Ui7RhAZPssDbHJdyCmkeib5T01n-U",
    authDomain: "cwitter-b2e19.firebaseapp.com",
    projectId: "cwitter-b2e19",
    storageBucket: "cwitter-b2e19.appspot.com",
    messagingSenderId: "210707833642",
    appId: "1:210707833642:web:dc493ef0774a7240e43453"
  };
  console.log(firebaseConfig)
  

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
