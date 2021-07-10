import firebase from '../../firebase/firebase.utils';

export const loginRequest = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
