import React, { FC } from 'react';
import { Item, List, Image, Placeholder } from 'semantic-ui-react';

import { User } from '../services/twitter/models/user';

type Props = {
  user: User | null;
  loading: boolean;
};

const Profile: FC<Props> = ({ user, loading }) => {
  if (!loading && user) {
    return (
      <Item.Group>
        <Image src={user.profile_image_url} fluid />
        <Item.Content>
          <List>
            <List.Item>
              <List.Content>Name: {user.name}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Birthday: {user.created_at}</List.Content>
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
        </Item.Content>
      </Item.Group>
    );
  } else {
    return (
      <Item.Group>
        <Placeholder style={{ width: 350, height: 414 }}>
          <Placeholder.Image />
        </Placeholder>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Item.Group>
    );
  }
};

export default Profile;
