import React, { FC } from 'react';
import { Item, List, Image } from 'semantic-ui-react';

type Props = {
  url?: string;
  name?: string;
  birthday?: string;
  bloodType?: 'A' | 'B' | 'O' | 'AB';
  twitterLink?: string;
};

const Profile: FC<Props> = ({
  url = 'http://placehold.jp/500x500.png',
  name = 'my name',
  birthday = '1990/01/31',
  bloodType = 'A',
  twitterLink = 'https://twitter.com',
}) => (
  <Item.Group>
    <Image src={url} fluid />
    <Item.Content>
      <List>
        <List.Item>
          <List.Content>Name: {name}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Birthday: {birthday}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Blood Type: {bloodType}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <a href={twitterLink}>twitter</a>
          </List.Content>
        </List.Item>
      </List>
    </Item.Content>
  </Item.Group>
);

export default Profile;
