import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDBcpvCDn3hzkX-K0wMb7zyL8Eyb_F_rpA",
    authDomain: "smart-world-59fca.firebaseapp.com",
    databaseURL: "https://smart-world-59fca.firebaseio.com",
    projectId: "smart-world-59fca",
    storageBucket: "smart-world-59fca.appspot.com",
    messagingSenderId: "55633803714",
    appId: "1:55633803714:web:60646fbe1c95bba5adbe5b"
  };
 
  
  export const initFireBase = () => {
        firebase.initializeApp(firebaseConfig);
        return firebase.firestore()
  }

 

 