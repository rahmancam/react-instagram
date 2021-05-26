import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FIREBASE_CONFIG } from '../config';

const firebase = Firebase.initializeApp(FIREBASE_CONFIG);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };