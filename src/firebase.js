import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcZr2HA7nJgdgteqb-PdJyEb1ny_DrDTs",
  authDomain: "netflix-clone-bb15d.firebaseapp.com",
  projectId: "netflix-clone-bb15d",
  storageBucket: "netflix-clone-bb15d.appspot.com",
  messagingSenderId: "427293540894",
  appId: "1:427293540894:web:2c248f74f77592aea7240f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
