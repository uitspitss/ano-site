import axios from 'axios';

import { User } from './models/user';

const getUser = async (userId: string | number) => {
  let user: User | null = null;
  const result = await axios.get(`/api/v1/twitter/user/${userId}`);

  if (result.data) {
    user = { ...result.data };
  }
  return user;
};

export default getUser;
