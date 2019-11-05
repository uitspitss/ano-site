import React, { FC } from 'react';
import { Item, List, Image } from 'semantic-ui-react';

import { User } from '../services/twitter/models/user';

type Props = {
  user: User | null;
};

const Profile: FC<Props> = ({ user }) => {
  if (user) {
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
        <Image fluid />
        <Item.Content>
          <List>
            <List.Item>
              <List.Content>Name: </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Birthday: </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Blood Type: </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <a href={`https://twiter.com/`}>twitter</a>
              </List.Content>
            </List.Item>
          </List>
        </Item.Content>
      </Item.Group>
    );
  }
};

export default Profile;
