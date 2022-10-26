import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [pending, setPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setBlogs(data.data);
          setPending(false);
        } else {
          throw Error("Something Wrong here!");
        }
      })
      .catch((err) => {
        setErr(err);
        setPending(false);
      });
  }, [url]);

  return { blogs, pending, err };
};

export default useFetch;
