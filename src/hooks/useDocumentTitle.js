import React, { useEffect, useRef, useState } from "react";

export default function useDocumentTitle() {
  const defTitle = useRef(document.title);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "") {
      document.title = defTitle.current;
      return;
    }

    document.title = value;
  }, [value]);

  return [value, setValue];
}
