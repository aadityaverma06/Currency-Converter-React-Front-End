import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [currData, setCurrData] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const finalData = await res.json();
        setCurrData(finalData[currency]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currency]);

  return currData;
}

export default useCurrencyInfo;
