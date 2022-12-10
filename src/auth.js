import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
