import React, { FC, useState, useEffect, useRef, useContext } from 'react';
import useForm from 'react-hook-form';
import { capitalize } from 'lodash';

import { FirebaseContext, UserContext } from '../contexts';
import writeUserInfo from '../services/ano-site/write-user-info';
import { User as TwitterUser } from '../services/twitter/models/user';

type FormProps = {
  name: string;
  label?: string;
  type?: string;
  defaultValue?: string;
  textarea?: boolean;
  twitterUser?: TwitterUser | null;
};

const FormField: FC<FormProps> = ({
  name,
  label,
  type,
  defaultValue = '',
  textarea = false,
  twitterUser = null,
}) => {
  const { db } = useContext(FirebaseContext);
  const { user, setUser } = useContext(UserContext);
  const fieldValue = useRef(defaultValue);
  const [changing, setChange] = useState(false);
  const [editable, setEditable] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = handleSubmit(async ({ value }) => {
    fieldValue.current = value;
    setValue('value', value);

    if (db && user && name && value) {
      const theUser = await writeUserInfo(db, user, name, value);
      if (theUser) {
        setUser(theUser);
      }
    }

    setChange(!changing);
  });

  const handleClick = () => {
    setChange(!changing);
  };

  useEffect(() => {
    setValue('value', fieldValue.current);
  }, [changing]);

  useEffect(() => {
    if (twitterUser) {
      if (user && twitterUser.id_str === user.providerUid) {
        setEditable(true);
      } else {
        setEditable(false);
      }
    }
  }, [user]);

  return (
    <>
      {changing ? (
        <form onSubmit={onSubmit}>
          {label && <label>{capitalize(label)}: </label>}
          {textarea ? (
            <textarea name="value" ref={register} />
          ) : (
            <input type={type ? type : 'text'} name="value" ref={register} />
          )}{' '}
          <button type="submit">submit</button>
        </form>
      ) : (
        <p>
          {label && `${capitalize(label)}: `}
          {fieldValue.current}{' '}
          {editable && (
            <button type="button" onClick={handleClick}>
              edit
            </button>
          )}
        </p>
      )}
    </>
  );
};

export default FormField;
