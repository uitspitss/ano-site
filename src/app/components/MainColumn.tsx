import React, { FC } from 'react';
import { Grid } from 'semantic-ui-react';

import Title from './Title';
import Profile from './Profile';
import Contact from './Contact';
import LatestInfo from './LatestInfo';
import CharctersPrintedBackground from './CharctersPrintedBackground';
import Sidebar from './Sidebar';
import { User } from '../services/twitter/models/user';
import { Tweet } from '../services/twitter/models/tweet';

type Props = {
  user: User | null;
  timeline: Tweet[] | null;
  loading: boolean;
};

const MainColumn: FC<Props> = ({ user, timeline, loading }) => (
  <Sidebar>
    <CharctersPrintedBackground text={user ? user.name : 'ano-site'}>
      <Grid column={2} padded relaxed stackable>
        <Grid.Row centered>
          <Grid.Column width={16}>
            {loading ? (
              <Title title="This site is Ano Site." />
            ) : (
              <Title
                title={
                  user
                    ? `This site is ${user.name}'s Homepage`
                    : 'This site is Ano Site.'
                }
              />
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={4}>
            <Profile user={user} loading={loading} />
            <Contact user={user} loading={loading} />
          </Grid.Column>
          <Grid.Column width={6}>
            <LatestInfo timeline={timeline} loading={loading} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CharctersPrintedBackground>
  </Sidebar>
);

export default MainColumn;
