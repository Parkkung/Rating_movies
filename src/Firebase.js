import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCL4VBOmmSPbZiZxglIw7MgUgP1qZyx5co",
  authDomain: "rating-movies-9fb00.firebaseapp.com",
  projectId: "rating-movies-9fb00",
  storageBucket: "rating-movies-9fb00.appspot.com",
  messagingSenderId: "591823645398",
  appId: "1:591823645398:web:c6dd6f9f22a0daba517777",
  measurementId: "G-115PE7R77F"
});

export default firebaseConfig


export const provider = new firebase.auth.FacebookAuthProvider()