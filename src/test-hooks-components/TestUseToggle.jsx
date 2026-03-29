import React from "react";
import useToggle from "../hooks/useToggle";

export default function TestUseToggle() {
  const { value, toggle } = useToggle(false);

  return (
    <div>
      <div>{String(value)}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
