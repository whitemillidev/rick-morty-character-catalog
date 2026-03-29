import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Invalid url");
        return res.json();
      })
      .then((data) => setData(data.results))
      .catch((error) => {
        setErrors(error);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, errors };
}
