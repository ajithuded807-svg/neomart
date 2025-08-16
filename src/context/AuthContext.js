// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithGoogle } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // 🔑 Email login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🆕 Signup
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 🚪 Logout
  const logout = () => {
    return signOut(auth);
  };

  // 🌐 Google login
  const loginWithGoogle = () => {
    return signInWithGoogle();
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, signup, logout, loginWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};