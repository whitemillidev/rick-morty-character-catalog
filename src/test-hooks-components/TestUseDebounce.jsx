import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function TestUseDebounce() {
  const [search, setSearch] = useState("");
  const value = useDebounce(search, 700);

  console.log(value);

  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
