import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBnKqVWeXIJq8NpunOhifqkYyaCAEqd5Yo",
    authDomain: "market-5b9c4.firebaseapp.com",
    projectId: "market-5b9c4",
    storageBucket: "market-5b9c4.appspot.com",
    messagingSenderId: "891585507480",
    appId: "1:891585507480:web:b69223e1c05e6745aca0ed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
