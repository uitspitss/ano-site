import React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';
import firebase from 'firebase/app';

import MainColumn from '../components/MainColumn';
import './index.css';
import FirebaseApp from '../FirebaseApp';
import firebaseConfig from '../firebase-config';
// import useTwitter from '../hooks/use-twitter';
import { defaultUser } from '../services/twitter/models/user';
import { defaultTweet } from '../services/twitter/models/tweet';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type Props = {
  screenName: string;
};

const IndexPage: NextPage<Props> = ({}) => {
  // const { user, timeline, loading, error } = useTwitter(screenName);
  const timeline = [
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
    defaultTweet,
  ];

  return (
    <>
      <FirebaseApp>
        <MainColumn user={defaultUser} timeline={timeline} loading={false} />
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
