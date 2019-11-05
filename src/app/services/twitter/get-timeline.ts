import axios from 'axios';

import { Tweet } from './models/tweet';

const getTimeline = async (screenName: string | number) => {
  let timeline: Tweet[] | null = null;
  const result = await axios.get(`/api/v1/twitter/timeline/${screenName}`);

  if (result.data) {
    timeline = result.data;
  }
  return timeline;
};

export default getTimeline;
