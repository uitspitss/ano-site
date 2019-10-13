import * as React from 'react';

import Profile from './Profile';
import Contact from './Contact';

type Props = {};

const MainLeftColumn: React.FC<Props> = () => (
  <>
    <Profile />
    <Contact />
  </>
);

export default MainLeftColumn;
