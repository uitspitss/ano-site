import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@emotion/styled';

import MainLeftColumn from './MainLeftColumn';
import MainRightColumn from './MainRightColumn';
import Sidebar from './Sidebar';
import Title from './Title';

type Props = {};

const PrintedCharsDiv = styled('div')`
  &::before {
    content: 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test';
    z-index: -1;
    font-size: 70px;
    font-family: 'Pinyon Script', cursive;
    line-height: 2;
    word-break: break-all;
    position: absolute;
    color: #d3f6e0;
  }
`;

const MainColumn: React.FC<Props> = () => (
  <PrintedCharsDiv>
    <Grid>
      <Sidebar />
      <Grid.Row>
        <Grid.Column width={16} textAlign="center">
          <Title />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1} />
        <Grid.Column width={6}>
          <MainLeftColumn />
        </Grid.Column>
        <Grid.Column width={8}>
          <MainRightColumn />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  </PrintedCharsDiv>
);

export default MainColumn;
