import firebase from 'firebase/app';
import { createContext } from 'react';

import { User } from './services/ano-site/models/user';
import {
  User as TwitterUser,
  defaultUser as twitterDefaultUser,
} from './services/twitter/models/user';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

type UserContextValue = {
  user: User | null;
  credential: firebase.auth.UserCredential | null;
  setCredential: (credential: firebase.auth.UserCredential | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => {},
});

type TwitterContextValue = {
  user: TwitterUser;
  setUser: (user: TwitterUser) => void;
};

export const TwitterContext = createContext<TwitterContextValue>({
  user: twitterDefaultUser,
  setUser: () => {},
});
