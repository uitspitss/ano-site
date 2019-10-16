import React, { FC } from 'react';

import Profile from './Profile';
import Contact from './Contact';

type Props = {};

const MainLeftColumn: FC<Props> = () => (
  <>
    <Profile />
    <Contact />
  </>
);

export default MainLeftColumn;
