import { useEffect, useState } from "react";

export default function useDebounce(initialValue, delay) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(timerID);
    };
  }, [initialValue]);

  return value;
}
