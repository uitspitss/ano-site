import React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase/app';

import MainColumn from '../components/MainColumn';
import './index.css';
import FirebaseApp from '../FirebaseApp';
import firebaseConfig from '../firebase-config';
import useTwitter from '../hooks/use-twitter';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type Props = {
  screenName: string;
};

const IndexPage: NextPage<Props> = ({ screenName }) => {
  const { user, timeline, loading } = useTwitter(screenName);

  return (
    <>
      <FirebaseApp>
        <MainColumn twitterUser={user} timeline={timeline} loading={loading} />
      </FirebaseApp>
    </>
  );
};

IndexPage.getInitialProps = async ({ query }) => {
  let screenName = query ? query.screenName : null;
  screenName = screenName ? (screenName as string).split(', ')[0] : 'ano_site';
  return { screenName: screenName };
};

export default IndexPage;
