import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function TestUseDocumentTitle() {
  const [value, setValue] = useDocumentTitle();

  return (
    <div>
      <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setValue("")}>Reset</button>
    </div>
  );
}
