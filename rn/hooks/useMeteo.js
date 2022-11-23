import React, {useState, useEffect} from "react";
import axios from "axios";

const useMeteo = () => {
  //useState

  useEffect(() => {
    async function fetchData() {
      //call api
      await axios.get("/api/meteo")
    }
    fetchData();
  }, [])

  useEffect(() => {
    (async () => {
      //call api
    })()
  }, [])
}

export default useMeteo;