import React, { FC } from 'react';
import { List, Placeholder } from 'semantic-ui-react';

import { User as TwitterUser } from '../services/twitter/models/user';
import FormField from '../components/FormField';

type Props = {
  twitterUser: TwitterUser | null;
  loading: boolean;
};

const Contact: FC<Props> = ({ twitterUser, loading }) => {
  if (!loading && twitterUser) {
    return (
      <List>
        <List.Item>{twitterUser.description}</List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="email"
              label="mail"
              defaultValue=""
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="production"
              label="production"
              defaultValue=""
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="zipCode"
              label="Zip code"
              defaultValue=""
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>Address: {twitterUser.location}</List.Content>
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
