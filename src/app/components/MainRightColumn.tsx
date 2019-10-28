import React, { FC } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

import LatestInfo from './LatestInfo';

type Props = {};

const MainRightColumn: FC<Props> = () => (
  <>
    <LatestInfo />
    <Button
      onClick={async () => {
        const result = await axios.get('/api/v1/twitter/profile/3250436377');
        console.log(result);
      }}
    >
      get
    </Button>
  </>
);

export default MainRightColumn;
