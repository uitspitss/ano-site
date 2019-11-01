import React, { useContext } from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase/app';

import MainColumn from '../components/MainColumn';
import './index.css';
import FirebaseApp from '../FirebaseApp';
import firebaseConfig from '../firebase-config';
import { TwitterContext } from '../contexts';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const IndexPage: NextPage = () => {
  const { user } = useContext(TwitterContext);

  return (
    <>
      <FirebaseApp>
        <MainColumn user={user} />
      </FirebaseApp>
    </>
  );
};

export default IndexPage;
