import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyDOuUqgXy9pF11h756lZ5G8X0nK1dCxbPE",
  authDomain: "apptrack-b28fe.firebaseapp.com",
  databaseURL: "https://apptrack-b28fe.firebaseio.com",
  projectId: "apptrack-b28fe",
  storageBucket: "apptrack-b28fe.appspot.com",
  messagingSenderId: "314820402656",
  appId: "1:314820402656:web:d10a805be2ed60b5999f85",
  measurementId: "G-98NFK3MS4V",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
