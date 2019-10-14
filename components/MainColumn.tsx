import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import MainLeftColumn from './MainLeftColumn';
import MainRightColumn from './MainRightColumn';
import Sidebar from './Sidebar';
import Title from './Title';

type Props = {};

const MainColumn: React.FC<Props> = () => (
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
);

export default MainColumn;
