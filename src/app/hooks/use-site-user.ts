import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { User } from '../services/ano-site/models/user';
import findUserName from '../services/ano-site/find-user-name';

const useSiteUser = (screenName: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const db = firebase.firestore();

  useEffect(() => {
    const load = async () => {
      if (screenName.length >= 1) {
        setLoading(true);
        try {
          const user = await findUserName(db, screenName);
          setUser(user);
        } catch (err) {
          setError(err);
          setUser(null);
        }
        setLoading(false);
      }
    };

    load();
  }, []);

  return { user, loading, error };
};

export default useSiteUser;
