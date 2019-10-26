import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import {
  Sidebar,
  SidebarPushable,
  Menu,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';

import Signin from './Signin';
import { FirebaseContext, UserContext } from '../contexts';

const StyledSidebar = styled(Sidebar)`
  &&& {
    background-color: #f0f0ff;
  }
`;

const CustomSidebar: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const signOut =
    auth && user
      ? (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          auth.signOut();
        }
      : () => {};

  return (
    <SidebarPushable as={Segment}>
      <StyledSidebar
        as={Menu}
        animation="push"
        vertical
        visible
        icon="labeled"
        width="wide"
      >
        {user ? (
          <>
            <Menu.Item>
              <Button onClick={signOut}>
                <Icon name="twitter" />
                signed in as <strong>{user.screenName}, sign out</strong>
              </Button>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item>
            <Signin />
          </Menu.Item>
        )}
        <Menu.Item as="a">Home</Menu.Item>
      </StyledSidebar>
    </SidebarPushable>
  );
};

export default CustomSidebar;
