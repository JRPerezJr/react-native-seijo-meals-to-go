import { auth } from '../../firebase/firebase.utils';

export const loginRequest = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const logoutRequest = () => auth.signOut();
