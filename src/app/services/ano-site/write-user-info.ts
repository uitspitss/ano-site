import firebase from 'firebase/app';
import { isEmpty } from 'lodash';

import { User } from './models/user';
import { collectionName } from '../constans';

const writeUserInfo = async (
  db: firebase.firestore.Firestore,
  signedInUser: User,
  fieldName: string,
  fieldValue: string | boolean,
) => {
  const id = signedInUser.id;

  const batch = db.batch();
  const userDoc = await db
    .collection(collectionName.users)
    .doc(id)
    .get();

  if (userDoc.exists) {
    const user = userDoc.data() as User;
    const diff: Partial<User> = {};

    // NOTE: ad-hoc below implement ignore types
    if (fieldValue !== user[fieldName]) {
      diff[fieldName] = fieldValue;
    }

    if (!isEmpty(diff)) {
      batch.update(userDoc.ref, {
        ...user,
        ...diff,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      await batch.commit();
    }

    const theUser: User = { ...user, ...diff, id: userDoc.id };

    return theUser;
  }
};

export default writeUserInfo;
