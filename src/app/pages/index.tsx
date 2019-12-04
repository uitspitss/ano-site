import React from 'react';
import { NextPage } from 'next';
import firebase from 'firebase/app';

import MainColumn from '../components/MainColumn';
import '../i18n';
import './index.css';
import FirebaseApp from '../FirebaseApp';
import firebaseConfig from '../firebase-config';
import useTwitter from '../hooks/use-twitter';
import useSiteUser from '../hooks/use-site-user';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type Props = {
  screenName: string;
};

const IndexPage: NextPage<Props> = ({ screenName }) => {
  const { user: twitterUser, timeline, loading: twitterLoading } = useTwitter(
    screenName,
  );
  const { user: siteUser, loading: siteLoading } = useSiteUser(screenName);

  return (
    <>
      <FirebaseApp>
        <MainColumn
          screenName={screenName}
          siteUser={siteUser}
          twitterUser={twitterUser}
          timeline={timeline}
          loading={twitterLoading && siteLoading}
        />
      </FirebaseApp>
    </>
  );
};

IndexPage.getInitialProps = async ({ query }) => {
  let screenName = query ? query.screenName : null;
  screenName = screenName ? (screenName as string).split(', ')[0] : 'uitspitss';

  return { screenName };
};

export default IndexPage;
