import React, { FC, useContext } from 'react';
import { List } from 'semantic-ui-react';

import { TwitterContext } from '../contexts';

type Props = {};

const Contact: FC<Props> = () => {
  const { user } = useContext(TwitterContext);

  return (
    <List>
      <List.Item>{user.description}</List.Item>
      <List.Item>
        <List.Content>Mail: {}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Production: {user.location}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Zip Code: {user.id_str}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Address: {user.location}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Tel: {user.id_str}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Fax: {user.id_str}</List.Content>
      </List.Item>
    </List>
  );
};

export default Contact;
