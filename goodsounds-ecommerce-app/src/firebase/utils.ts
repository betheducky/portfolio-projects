import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

interface UserProps {
   userAuth: User;
   additionalData?: object | null;
}

export const handleUserProfile = async ({ userAuth, additionalData }: UserProps) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    const userRef = doc(firestore, `users/${uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const timeStamp = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdDate: timeStamp,
                ...additionalData
            })
        } catch(err) {
            console.log("error caught is...", err);
        }
    }
}