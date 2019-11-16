import React, { FC } from 'react';
import { List, Placeholder } from 'semantic-ui-react';

import { User } from '../services/twitter/models/user';
import FormField from '../components/FormField';

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
          <List.Content>
            <FormField label="mail" editable={true} defaultValue="" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField label="production" editable={true} defaultValue="" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField label="Zip code" editable={true} defaultValue="" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Address: {user.location}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField label="tel" editable={true} defaultValue="" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField label="fax" editable={true} defaultValue="" />
          </List.Content>
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
