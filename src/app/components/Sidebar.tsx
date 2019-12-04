import React, { FC, useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Sidebar,
  Menu,
  Segment,
  Button,
  Icon,
  Header,
  Form,
} from 'semantic-ui-react';
import useForm from 'react-hook-form';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';

import Signin from './Signin';
import { FirebaseContext, UserContext } from '../contexts';

const StyledSidebar = styled(Sidebar)`
  &&& {
    background-color: #f0f0ff;
  }
`;

type FormProps = {
  searchTerm: string;
};

const CustomSidebar: FC = ({ children }) => {
  const { auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState(true);
  const { register, handleSubmit } = useForm<FormProps>();
  const { t } = useTranslation();

  const onSubmit = handleSubmit(({ searchTerm }) => {
    Router.push({ pathname: `/${searchTerm}` });
  });

  const signOut =
    auth && user
      ? (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          auth.signOut();
        }
      : () => {};

  useEffect(() => {
    if (user) {
      setVisible(false);
    }
  }, [user === null]);

  return (
    <Sidebar.Pushable as={Segment}>
      <Icon name="sidebar" size="big" onClick={() => setVisible(true)} />
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
          <Header textAlign="center">{t('About This Site')}</Header>
          <p>
            {t(
              'This site is a site to share the profile based on the information on Twitter, referring to the design of a site',
            )}
            .
            {t(
              'The user information and timeline information on this site is Displayed based on account information on Twitter',
            )}
            .
            {t(
              'In addition, information that does not exist on Twitter, such as birthdays and blood types, Only the account logged in to this service can edit the account information',
            )}
            .
          </p>
        </Menu.Item>
        <Menu.Item>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <input
                ref={register}
                name="searchTerm"
                placeholder="search user by Screen Name"
              />
            </Form.Group>
          </Form>
        </Menu.Item>
        <Menu.Item>
          <Header textAlign="center">
            {user ? (
              <Button onClick={signOut}>
                <Icon name="twitter" />
                signed in as {user.screenName}
              </Button>
            ) : (
              <Signin />
            )}
          </Header>
        </Menu.Item>
      </StyledSidebar>
      <Sidebar.Pusher>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default CustomSidebar;
