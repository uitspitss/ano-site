import React, { FC } from 'react';
import { List, Image, Placeholder, Icon } from 'semantic-ui-react';

import { User as TwitterUser } from '../services/twitter/models/user';
import FormField from '../components/FormField';

type Props = {
  twitterUser: TwitterUser | null;
  loading: boolean;
};

const Profile: FC<Props> = ({ twitterUser, loading }) => {
  if (!loading && twitterUser) {
    return (
      <List>
        <List.Item>
          <Image src={twitterUser.profile_image_url} size="medium" />
        </List.Item>
        <List.Item>
          <List.Content>Name: {twitterUser.name}</List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="birthday"
              label="birthday"
              type="date"
              defaultValue=""
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField name="bloodType" label="blood type" defaultValue="" />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <a
              href={`https://twiter.com/${twitterUser.name}`}
              target="_blank"
              rel="noopener"
            >
              Twitter Profile <Icon name="external alternate" />
            </a>
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
