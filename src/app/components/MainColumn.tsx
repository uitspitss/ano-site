import React, { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@emotion/styled';

import Title from './Title';
import Profile from './Profile';
import Contact from './Contact';
import LatestInfo from './LatestInfo';
import Sidebar from './Sidebar';
import { User } from '../services/twitter/models/user';
import { Tweet } from '../services/twitter/models/tweet';

type StyleProps = {
  text: string;
};

const PrintedCharsDiv = styled.div<StyleProps>`
  &&&::before {
    content: '${(props: StyleProps) => props.text}';
    z-index: -1;
    font-size: 70px;
    font-family: 'Pinyon Script', cursive;
    line-height: 2;
    word-break: break-all;
    position: absolute;
    color: #d3f6e0;
  }
`;

type Props = {
  user: User | null;
  timeline: Tweet[] | null;
  loading: boolean;
};

const MainColumn: FC<Props> = ({ user, timeline, loading }) => (
  <PrintedCharsDiv text={user ? user.name : 'username'}>
    <Grid column={2} padded relaxed stackable>
      <Sidebar />
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
  </PrintedCharsDiv>
);

export default MainColumn;
