import * as React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';

import LeftColumn from '../components/LeftColumn';
import MainColumn from '../components/MainColumn';
import MainLeftColumn from '../components/MainLeftColumn';
import MainRightColumn from '../components/MainRightColumn';
import Title from '../components/Title';
import './index.css';

const IndexPage: NextPage = () => {
  return (
    <>
      <LeftColumn />
      <MainColumn>
        <Title title="Homepage Title" />
        <MainLeftColumn />
        <MainRightColumn />
      </MainColumn>
    </>
  );
};

export default IndexPage;
