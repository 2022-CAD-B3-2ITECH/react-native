import React, {useState, useEffect} from "react";
import axios from "axios";

const useGet = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!url) return;
      setLoading(true);
      try {
        let response = await axios.get(url)
        setData(response.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    })();
  }, [url])

  return [data, loading];
}

export default useGet;