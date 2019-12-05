import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';

import MainColumn from '../../components/MainColumn';
import '../../i18n';
import '../index.css';
import FirebaseApp from '../../FirebaseApp';
import firebaseConfig from '../../firebase-config';
import useTwitter from '../../hooks/use-twitter';
import useSiteUser from '../../hooks/use-site-user';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const UserPage: NextPage = () => {
  const router = useRouter();
  let { screenName } = router.query;
  screenName = screenName ? (screenName as string).split(', ')[0] : 'uitspitss';
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

export default UserPage;
