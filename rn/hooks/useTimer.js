import React, {useState, useEffect} from 'react';
import moment from "moment";

const useTimer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let id = setInterval(() => {
      setTime(moment().format("hh:mm:ss"))
    }, 1000)
    return () => clearInterval(id);
  }, [])

  return time;
}

export default useTimer;