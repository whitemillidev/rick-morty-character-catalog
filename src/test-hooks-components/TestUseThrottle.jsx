import React, { useEffect, useRef, useState } from "react";
import useThrottle from "../hooks/useThrottle";

export default function TestUseThrottle() {
  const [search, setSearch] = useState("");
  const value = useThrottle(search, 1000);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  }, [value]);

  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
ric