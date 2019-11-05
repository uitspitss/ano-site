import React, { FC } from 'react';
import { List } from 'semantic-ui-react';

import { User } from '../services/twitter/models/user';

type Props = {
  user: User | null;
};

const Contact: FC<Props> = ({ user }) => {
  if (user) {
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
  } else {
    return (
      <List>
        <List.Item></List.Item>
        <List.Item>
          <List.Content>Mail: </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Production: </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Zip Code: </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Address: </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Tel: </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Fax: </List.Content>
        </List.Item>
      </List>
    );
  }
};

export default Contact;
