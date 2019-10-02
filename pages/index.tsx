import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import 'semantic-ui-css/semantic.min.css';

import MainColumn from '../components/MainColumn';
import './index.css';

const IndexPage: NextPage = () => {
  return (
    <MainColumn title="MainColumn | Next.js + TypeScript Example">
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">
          <a href="/about">About</a>
        </Link>
      </p>
    </MainColumn>
  );
};

export default IndexPage;
