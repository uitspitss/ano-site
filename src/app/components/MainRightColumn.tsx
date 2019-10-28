import React, { FC } from 'react';
import { Button } from 'semantic-ui-react';

import LatestInfo from './LatestInfo';
import getUser from '../services/twitter/get-user';

type Props = {};

const MainRightColumn: FC<Props> = () => (
  <>
    <LatestInfo />
    <Button
      onClick={async () => {
        const user = await getUser('3250436377');
        console.log(user);
      }}
    >
      get
    </Button>
  </>
);

export default MainRightColumn;
