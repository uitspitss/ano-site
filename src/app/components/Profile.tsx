import React, { FC, useState, useContext, useEffect } from 'react';
import { List, Image, Placeholder, Icon } from 'semantic-ui-react';

import { User as TwitterUser } from '../services/twitter/models/user';
import { User } from '../services/ano-site/models/user';
import FormField from '../components/FormField';
import { UserContext } from '../contexts';

type Props = {
  siteUser: User | null;
  twitterUser: TwitterUser | null;
  loading: boolean;
};

const Profile: FC<Props> = ({ siteUser, twitterUser, loading }) => {
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!loading && twitterUser && siteUser) {
      if (
        siteUser.published ||
        (user && twitterUser.id_str === user.providerUid)
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  if (twitterUser && siteUser && visible) {
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
              defaultValue={siteUser.birthday}
              twitterUser={twitterUser}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <FormField
              name="bloodType"
              label="blood type"
              defaultValue={siteUser.bloodType}
              twitterUser={twitterUser}
            />
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
