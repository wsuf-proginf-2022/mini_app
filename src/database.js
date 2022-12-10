import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import config from '../db_config.js';

const app = initializeApp(config);
export const db = getFirestore(app);

export async function addData(data) {
  const docRef = await addDoc(collection(db, 'myData'), data);
  console.log('Document written with ID: ', docRef.id);
}

export async function getData() {
  const data = await getDocs(collection(db, 'myData'));
  const result = [];
  for (const doc of data.docs) {
    result.push(doc.data());
  }
  return result;
}
