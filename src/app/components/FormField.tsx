import React, { FC, useState, useEffect, useRef, useContext } from 'react';
import useForm from 'react-hook-form';
import { capitalize } from 'lodash';

import { FirebaseContext, UserContext } from '../contexts';
import writeUserInfo from '../services/ano-site/write-user-info';

type FormProps = {
  name: string;
  label?: string;
  type?: string;
  defaultValue?: string;
  editable?: boolean;
  textarea?: boolean;
};

const FormField: FC<FormProps> = ({
  name,
  label,
  type,
  defaultValue = '',
  editable = false,
  textarea = false,
}) => {
  const { db } = useContext(FirebaseContext);
  const { user, setUser } = useContext(UserContext);
  const fieldValue = useRef(defaultValue);
  const [changing, setChange] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = handleSubmit(async ({ value }) => {
    fieldValue.current = value;
    setValue('value', value);
    console.log(user);
    console.log(name, value);

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
