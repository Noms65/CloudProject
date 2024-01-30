import React, { useEffect, useState } from "react";
import axios from "axios";

export function CallWebService(url){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [url]);
   return {data};
}

export function CallWebService2(url,donnees){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(donnees)
      });
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [url,donnees]);
   return {data};
}