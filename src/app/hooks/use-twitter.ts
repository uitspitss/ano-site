import { useEffect, useState } from 'react';

import getUser from '../services/twitter/get-user';
import getTimeline from '../services/twitter/get-timeline';
import { User } from '../services/twitter/models/user';
import { Tweet } from '../services/twitter/models/tweet';

const useTwitter = (screenName: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [timeline, setTimeline] = useState<Tweet[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const load = async () => {
      if (screenName.length >= 1) {
        setLoading(true);
        try {
          const twUser = await getUser(screenName);
          const twTimeline = await getTimeline(screenName);
          setUser(twUser);
          setTimeline(twTimeline);
        } catch (err) {
          setError(err);
          setUser(null);
          setTimeline([]);
        }
        setLoading(false);
      }
    };

    load();
  }, []);

  return { user, timeline, loading, error };
};

export default useTwitter;
