import React, { FC, useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import Title from './Title';
import Profile from './Profile';
import Contact from './Contact';
import LatestInfo from './LatestInfo';
import CharctersPrintedBackground from './CharctersPrintedBackground';
import Sidebar from './Sidebar';
import { User } from '../services/ano-site/models/user';
import { User as TwitterUser } from '../services/twitter/models/user';
import { Tweet } from '../services/twitter/models/tweet';

type Props = {
  screenName: string;
  siteUser: User | null;
  twitterUser: TwitterUser | null;
  timeline: Tweet[] | null;
  loading: boolean;
};

const MainColumn: FC<Props> = ({
  screenName,
  siteUser,
  twitterUser,
  timeline,
  loading,
}) => {
  const [title, setTitle] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (!siteUser) {
      setTitle(() => `${screenName} ` + t('is not found in the this site'));
    } else if (!twitterUser) {
      setTitle(() => `${screenName} ` + t('is not found in the Twitter'));
    } else if (!siteUser.published) {
      setTitle(() => `${screenName}` + t("'s homepage haven't been published"));
    } else {
      setTitle(
        () => t('This site is') + ` ${siteUser.displayName}` + t("'s homepage"),
      );
    }
  });

  return (
    <Sidebar>
      <CharctersPrintedBackground
        text={twitterUser ? twitterUser.name : 'ano-site'}
      >
        <Grid column={2} padded relaxed stackable>
          <Grid.Row centered>
            <Grid.Column width={16}>
              {loading ? (
                <Title title={t('This site is Ano Site') + '.'} />
              ) : (
                <Title title={t(title) + '.'} />
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={4}>
              <Profile
                siteUser={siteUser}
                twitterUser={twitterUser}
                loading={loading}
              />
              <Contact
                siteUser={siteUser}
                twitterUser={twitterUser}
                loading={loading}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <LatestInfo
                siteUser={siteUser}
                timeline={timeline}
                loading={loading}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </CharctersPrintedBackground>
    </Sidebar>
  );
};

export default MainColumn;
