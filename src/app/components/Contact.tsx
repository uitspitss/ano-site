import React, { FC } from 'react';
import { List, Placeholder } from 'semantic-ui-react';

import { User } from '../services/twitter/models/user';

type Props = {
  user: User | null;
  loading: boolean;
};

const Contact: FC<Props> = ({ user, loading }) => {
  if (!loading && user) {
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
      <Placeholder>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    );
  }
};

export default Contact;
