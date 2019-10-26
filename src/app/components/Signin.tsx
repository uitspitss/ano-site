import React, { FC, useContext } from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Grid } from 'semantic-ui-react';

import { FirebaseContext, UserContext } from '../contexts';

const Signin: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: authResult => {
        setCredential(authResult as firebase.auth.UserCredential);
        return false;
      },
    },
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Grid.Column>
    </Grid>
  );
};

export default Signin;
