import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "./init";
import { useEffect, useState } from "react";

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.token;
      const user = result.user;
    }).catch((error) => {
      const errCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Logged out.");
    })
    .catch((err) => {
      console.error("Error while logging out: ", err);
    });
};

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      setUser(_user);
    });

    return () => unsubscribe();
  }), [];

  return user;
}