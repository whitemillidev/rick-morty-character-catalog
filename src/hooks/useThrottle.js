import { useEffect, useRef, useState } from "react";

export default function useThrottle(iniitialValue, delay) {
  const [value, setValue] = useState(iniitialValue);
  const lastTime = useRef(0);

  useEffect(() => {
    const now = Date.now();

    if (now - lastTime.current >= delay) {
      lastTime.current = now;
      setValue(iniitialValue);
    }
  }, [iniitialValue]);

  return value;
}
