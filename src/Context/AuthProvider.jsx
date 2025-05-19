import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import auth from "../Firebase/firebase.config";

// Create and export context
export const AuthContext = createContext(null); // Explicitly initialized with null

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);

  // Auth operations with error handling
  const authOperations = {
    register: (email, password) =>
      handleAuthOp(() => createUserWithEmailAndPassword(auth, email, password)),
    login: (email, password) =>
      handleAuthOp(() => signInWithEmailAndPassword(auth, email, password)),
    signInWithGoogle: () =>
      handleAuthOp(() => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      }),
    signOutUser: () => handleAuthOp(() => signOut(auth)),
  };

  // Unified auth operation handler
  const handleAuthOp = async (operation) => {
    setLoader(true);
    try {
      return await operation();
    } catch (error) {
      setLoader(false);
      throw error;
    } finally {
      setLoader(false);
    }
  };

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return unsubscribe;
  }, []);

  // Context value
  const authInfo = {
    user,
    loader,
    ...authOperations,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
