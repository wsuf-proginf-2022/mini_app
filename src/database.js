import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import config from '../db_config.js';

const app = initializeApp(config);
const db = getFirestore(app);

async function addData(data) {
  const docRef = await addDoc(collection(db, 'myData'), data);
  console.log('Document written with ID: ', docRef.id);
}
