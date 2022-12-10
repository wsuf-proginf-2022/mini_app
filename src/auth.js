import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase
} from 'firebase/auth';
import { app } from './database';

const auth = getAuth(app);

export async function signUp(email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    window.alert(error.message);
  }
}

export async function signIn(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    window.alert(error.message);
  }
}

export async function signOut() {
  try {
    await signOutFirebase(auth);
  } catch (error) {
    window.alert(error.message);
  }
}
