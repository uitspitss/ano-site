import * as React from 'react';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';

import MainColumn from '../components/MainColumn';
import './index.css';

const IndexPage: NextPage = () => {
  return (
    <>
      <MainColumn />
    </>
  );
};

export default IndexPage;
