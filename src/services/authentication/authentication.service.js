import { auth } from '../../firebase/firebase.utils';

export const loginRequest = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};
