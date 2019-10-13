import * as React from 'react';
import { Image } from 'semantic-ui-react';

type Props = {
  url?: string;
  name?: string;
  birthday?: string;
  bloodType?: 'A' | 'B' | 'O' | 'AB';
};

const Profile: React.FC<Props> = ({
  url = 'http://placehold.jp/150x150.png',
  name = 'my name',
  birthday = '1990/01/31',
  bloodType = 'A',
}) => (
  <>
    <Image src={url} />
    <ul>
      <li>Name: {name}</li>
      <li>Birthday: {birthday}</li>
      <li>Blood Type: {bloodType}</li>
    </ul>
  </>
);

export default Profile;
