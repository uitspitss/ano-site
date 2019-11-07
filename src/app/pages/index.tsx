import React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase/app';

import MainColumn from '../components/MainColumn';
import './index.css';
import FirebaseApp from '../FirebaseApp';
import firebaseConfig from '../firebase-config';
// import { TwitterContext } from '../contexts';
import useTwitter from '../hooks/use-twitter';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type Props = {
  screenName: string;
};

const IndexPage: NextPage<Props> = ({ screenName }) => {
  const { user, timeline } = useTwitter(screenName);

  return (
    <>
      <FirebaseApp>
        {screenName}
        <MainColumn user={user} timeline={timeline} />
      </FirebaseApp>
    </>
  );
};

IndexPage.getInitialProps = async ({ query }) => {
  let screenName = query ? query.screenName : null;
  screenName = screenName ? (screenName as string).split(', ')[0] : 'uitspitss';
  return { screenName: screenName };
};

export default IndexPage;
