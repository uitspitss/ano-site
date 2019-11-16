import React, { FC, useState, useEffect, useRef } from 'react';
import useForm from 'react-hook-form';
import { capitalize } from 'lodash';

type FormProps = {
  label?: string;
  defaultValue?: string;
  editable?: boolean;
  textarea?: boolean;
};

const FormField: FC<FormProps> = ({
  label,
  defaultValue = '',
  editable = false,
  textarea = false,
}) => {
  const fieldValue = useRef(defaultValue);
  const [changing, setChange] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = handleSubmit(({ value }) => {
    fieldValue.current = value;
    setValue('value', value);
    console.log(value, fieldValue.current);
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
            <input name="value" ref={register} />
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
