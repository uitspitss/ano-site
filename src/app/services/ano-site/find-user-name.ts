import firebase from 'firebase/app';

import { User } from './models/user';
import { collectionName } from '../constans';

const findUserName = async (
  db: firebase.firestore.Firestore,
  screenName: string,
) => {
  let theUser: User | null = null;
  const userDocs = await db
    .collection(collectionName.users)
    .where('screenName', '==', screenName)
    .get();

  if (!userDocs.empty) {
    const userDoc = userDocs.docs.find(
      doc => (doc.data() as User).screenName === screenName,
    );
    if (userDoc) {
      theUser = userDoc.data() as User;
    }
  }

  return theUser;
};

export default findUserName;
