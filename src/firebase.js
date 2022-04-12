import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCBIFLmsLpKlO7vCIrrdKJNyKBkZ4pfKCk',
  authDomain: 'clone-38a22.firebaseapp.com',
  projectId: 'clone-38a22',
  storageBucket: 'clone-38a22.appspot.com',
  messagingSenderId: '763412672066',
  appId: '1:763412672066:web:af44440c84083a88b187db',
  measurementId: 'G-G7P953DX9Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
