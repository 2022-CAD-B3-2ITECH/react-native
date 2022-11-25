import {useState, useEffect} from "react";
import axios from "axios";

const useGet = (url, {defaultValue = null, format = (e) => e}) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    if (!url) return;
    try {
      let result = await axios.get(url);
      setData(format(result.data));
      setLoading(false);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {refresh()}, [url])

  return [data, loading, refresh];
}

export default useGet;