// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, getDocs, collection, getFirestore, query, where } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "countries-f806a.firebaseapp.com",
  projectId: "countries-f806a",
  storageBucket: "countries-f806a.appspot.com",
  messagingSenderId: "601863800152",
  appId: "1:601863800152:web:926530ebbc17203e34912d",
  measurementId: "G-Z7PCYX9457"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch(err) {
        console.log(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user
        // const q = query(collection(db, 'users'), where('uid', '==', user.id));
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };