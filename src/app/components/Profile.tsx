import React, { FC } from 'react';
import { List, Image, Placeholder } from 'semantic-ui-react';
import { parse, format } from 'date-fns';

import { User } from '../services/twitter/models/user';

type Props = {
  user: User | null;
  loading: boolean;
};

const Profile: FC<Props> = ({ user, loading }) => {
  if (!loading && user) {
    return (
      <List>
        <List.Item>
          <Image src={user.profile_image_url} size="medium" />
        </List.Item>
        <List.Item>
          <List.Content>Name: {user.name}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            Birthday:{' '}
            {user.created_at
              ? format(
                  parse(
                    user.created_at,
                    'EEE MMM dd hh:mm:ss xx yyyy',
                    new Date(),
                  ),
                  'MM/dd/yyyy',
                )
              : ''}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Blood Type: {user.location}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <a href={`https://twiter.com/${user.name}`}>twitter</a>
          </List.Content>
        </List.Item>
      </List>
    );
  } else {
    return (
      <>
        <Placeholder style={{ width: 300, height: 300 }}>
          <Placeholder.Image />
        </Placeholder>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </>
    );
  }
};

export default Profile;
