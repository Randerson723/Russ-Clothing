import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCkDiiTR2YjDi-TOzyGpKbHOTdxXeRSshs",
  authDomain: "russ-clothing.firebaseapp.com",
  projectId: "russ-clothing",
  storageBucket: "russ-clothing.appspot.com",
  messagingSenderId: "479841670036",
  appId: "1:479841670036:web:d4e5c1cc81b47ce9bd3581",
  measurementId: "G-HE2PFKFX53",
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;