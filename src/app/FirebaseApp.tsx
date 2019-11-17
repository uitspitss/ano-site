import React, { FC, useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, UserContext } from './contexts';
import { User } from './services/ano-site/models/user';
import writeUser from './services/ano-site/write-user';
import findUser from './services/ano-site/find-user';

const FirebaseApp: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [
    credential,
    setCredential,
  ] = useState<firebase.auth.UserCredential | null>(null);
  const counterRef = useRef(0);
  const auth = firebase.auth();
  const db = firebase.firestore();

  const unsubscribe = auth.onAuthStateChanged(async firebaseUser => {
    if (firebaseUser) {
      if (counterRef.current === 1 && credential) {
        const theUser = await writeUser(db, firebaseUser, credential);
        setUser(theUser);
      } else if (!user) {
        const theUser = await findUser(db, firebaseUser.uid);
        setUser(theUser);
      }
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    if (credential) counterRef.current += 1;

    return unsubscribe;
  });

  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      <UserContext.Provider
        value={{ user, credential, setUser, setCredential }}
      >
        {children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
