import React, { FC, useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Sidebar,
  Menu,
  Segment,
  Button,
  Icon,
  Header,
} from 'semantic-ui-react';

import Signin from './Signin';
import { FirebaseContext, UserContext } from '../contexts';
import writeUserInfo from '../services/ano-site/write-user-info';

const StyledSidebar = styled(Sidebar)`
  &&& {
    background-color: #f0f0ff;
  }
`;

const CustomSidebar: FC = ({ children }) => {
  const { auth, db } = useContext(FirebaseContext);
  const { user, setUser } = useContext(UserContext);
  const [visible, setVisible] = useState(true);

  const signOut =
    auth && user
      ? (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          auth.signOut();
        }
      : () => {};
  const handlePublish =
    db && user
      ? async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          if (db && user) {
            const theUser = await writeUserInfo(
              db,
              user,
              'published',
              !user.published,
            );
            if (theUser) {
              setUser(theUser);
            }
          }
        }
      : () => {};

  useEffect(() => {
    if (user) {
      setVisible(false);
    }
  }, [user === null]);

  return (
    <Sidebar.Pushable as={Segment}>
      <Icon name="bars" size="big" onClick={() => setVisible(true)} />
      <StyledSidebar
        as={Menu}
        animation="push"
        vertical
        borderless
        visible={visible}
        onHide={() => setVisible(false)}
        width="wide"
        size="large"
      >
        <Icon name="remove" size="big" onClick={() => setVisible(false)} />
        <Header size="huge" textAlign="center">
          ano-site
        </Header>
        <Menu.Item>
          <Header textAlign="center">About</Header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            quis provident in, eaque dicta nisi. Temporibus saepe sed assumenda
            repellat minus consequuntur, quas quia, ipsa iusto, id aut corporis
            animi?
          </p>
        </Menu.Item>
        <Menu.Item>
          <Header textAlign="center">
            {user ? (
              <Button onClick={signOut}>
                <Icon name="twitter" />
                signed in as <strong>{user.screenName}, sign out</strong>
              </Button>
            ) : (
              <Signin />
            )}
          </Header>
        </Menu.Item>
        <Menu.Item>
          <Header textAlign="center">
            {user ? (
              user.published ? (
                <Button onClick={handlePublish}>Unpublish</Button>
              ) : (
                <Button onClick={handlePublish} primary>
                  Publish
                </Button>
              )
            ) : (
              ''
            )}
          </Header>
        </Menu.Item>
      </StyledSidebar>
      <Sidebar.Pusher>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default CustomSidebar;
