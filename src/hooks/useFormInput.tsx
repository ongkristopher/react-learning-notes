import { SetStateAction, useState } from 'react';
function useFormInput(initialValue: string | number) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: { target: { value: SetStateAction<string | number>; }; }) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}

export default useFormInput