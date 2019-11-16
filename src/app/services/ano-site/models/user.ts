import { firestore } from 'firebase/app';

export type User = {
  id?: string;
  screenName: string;
  displayName: string | null;
  description: string | null;
  photoUrl: string | null;
  provider: string;
  providerUid: string;
  email: string;
  production: string;
  zipCode: string;
  tel: string;
  fax: string;
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
  email: '',
  production: '',
  zipCode: '',
  tel: '',
  fax: '',
  published: false,
};
