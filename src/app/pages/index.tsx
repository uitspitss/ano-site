import * as React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase/app';

import MainColumn from '../components/MainColumn';
import './index.css';
import FirebaseApp from '../FirebaseApp';
import firebaseConfig from '../firebase-config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const IndexPage: NextPage = () => {
  return (
    <>
      <FirebaseApp>
        <MainColumn />
      </FirebaseApp>
    </>
  );
};

export default IndexPage;
