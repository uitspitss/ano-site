import React, { FC, useContext } from 'react';
import { Item, List, Image } from 'semantic-ui-react';

import { TwitterContext } from '../contexts';

type Props = {};

const Profile: FC<Props> = () => {
  const { user } = useContext(TwitterContext);

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
};

export default Profile;
