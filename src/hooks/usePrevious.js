import { useEffect, useRef } from "react";

export default function usePrevious(currValue) {
  const prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = currValue;
  }, [currValue]);

  return [prevValue.current, currValue];
}
