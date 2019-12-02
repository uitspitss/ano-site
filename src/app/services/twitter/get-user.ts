import axios from 'axios';

import { User } from './models/user';

const getUser = async (screenName: string) => {
  let user: User | null = null;
  const result = await axios.get(`/api/v1/twitter/user/${screenName}`);

  if (result.data) {
    user = result.data;
  }

  return user;
};

export default getUser;
