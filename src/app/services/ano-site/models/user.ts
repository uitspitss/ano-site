import { firestore } from 'firebase/app';

export type User = {
  id?: string;
  screenName: string;
  displayName: string | null;
  description: string | null;
  photoUrl: string | null;
  provider: string;
  providerUid: string;
  birthday: string | null;
  bloodType: string | null;
  email: string | null;
  production: string | null;
  zipCode: string | null;
  published: boolean;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankUser: User = {
  screenName: '',
  displayName: null,
  description: null,
  photoUrl: null,
  provider: 'twitter',
  providerUid: '',
  createdAt: null,
  updatedAt: null,
  birthday: null,
  bloodType: null, // added this site
  email: null, // added this site
  production: null, // added this site
  zipCode: null, // added this site
  published: false, // added this sitex
};
