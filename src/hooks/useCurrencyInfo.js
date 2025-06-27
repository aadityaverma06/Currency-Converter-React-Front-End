import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        return res.json();
      } catch (error) {
        console.log(error);
      }
    };
    async function setFinalData(){
      const res = await fetchData();
      const finalData = res[currency];
      setData(finalData);
    }
    setFinalData();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
