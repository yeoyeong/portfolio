import { useState, useCallback } from "react";

function useInput(initialForm: string) {
  const [value, setValue] = useState(initialForm);
  const [byte, setByte] = useState(0);
  const handleChange = useCallback(
    (event: any) => {
      setValue(event.target.value);
    },
    [value]
  );

  const cutByLen = (e: any, limit: number) => {
    let totalByte: number = 0;
    let limitByte = limit;
    for (let i = 0; i < e.target.value.length; i++) {
      const currentByte = e.target.value.charCodeAt(i);
      if (totalByte >= limitByte) {
        e.target.value = e.target.value.substring(0, i);
        setValue(e.target.value.substring(0, i));
        break;
      }
      if (currentByte > 128) {
        totalByte += 1;
      } else {
        totalByte += 0.5;
      }
    }
    setByte(totalByte);
  };
  return {
    value,
    byte,
    onChange: handleChange,
    setValue,
    cutByLen,
  };
}

export default useInput;
