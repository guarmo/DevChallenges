import React, { useContext, useState, useEffect } from "react";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function facebookLogin() {
    var provider = facebookProvider;
    auth.useDeviceLanguage();
    return auth.signInWithPopup(provider);
  }

  function githubLogin() {
    var provider = githubProvider;
    auth.useDeviceLanguage();
    return auth.signInWithPopup(provider);
  }

  function googleLogin() {
    var provider = googleProvider;
    auth.useDeviceLanguage();
    return auth.signInWithPopup(provider);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateDisplayName(name) {
    return currentUser.updateProfile({ displayName: name });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    signup,
    updateEmail,
    updatePassword,
    updateDisplayName,
    facebookLogin,
    githubLogin,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
