import firebase from 'firebase/app';
import { isEmpty } from 'lodash';

import { User } from './models/user';
import { collectionName } from '../constans';

const writeUserInfo = async (
  db: firebase.firestore.Firestore,
  signedInUser: User,
  fieldName: string,
  fieldValue: string | Date,
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

    if (fieldValue !== user[fieldName]) {
      diff[fieldName] = fieldValue;
    }

    if (!isEmpty(diff)) {
      batch.update(userDoc.ref, {
        ...diff,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    await batch.commit();

    const theUser: User = { ...diff, ...user, id: userDoc.id };

    return theUser;
  }
};

export default writeUserInfo;
