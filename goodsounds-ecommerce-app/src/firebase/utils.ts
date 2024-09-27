import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Google sign-in failed:", error);
    if (error instanceof FirebaseError) {
      if (error.code === "auth/user-cancelled") {
        alert("Sign-in was canceled. Please try again.");
      } else {
        alert("An error occurred during sign-in. Please try again.");
      }
    } else {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  }
};

export const handleUserProfile = async (
  userAuth: User,
  additionalData?: object | null
) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = doc(firestore, `users/${uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const timeStamp = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdDate: timeStamp,
        ...additionalData,
      });
    } catch (err) {
      console.log("error caught is...", err);
    }
  }
  return userRef;
};
