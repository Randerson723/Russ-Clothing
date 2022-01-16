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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
//Creating a user profile in Firebase 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    

    const snapShot = await userRef.get();
    

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
//info above can be verfied in the firestore database
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;    
} 
//userRef is the object, set is the method that set its properties, which is our user info
//Firebase is 
firebase.initializeApp(config);

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
//Function that moved data for store from front-end to back-end(firebase)
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  })
  console.log(transformedCollection)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//Redux only passing the state needed for firebase---Rehydrate in console 
export default firebase;