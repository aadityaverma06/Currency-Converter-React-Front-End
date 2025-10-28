import backImage from "./assets/rm373batch4-07.jpg";
import { useEffect, useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { Inputbox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  function swap() {
    setFrom(to);
    setTo(from);
  }
  useEffect(() => convert(), [currencyInfo]);

  function convert() {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  }

  return (
    <div
      className="min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-lg sm:text-2xl p-4"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="w-max sm:w-[600px]">
        <div className="w-full mx-auto border border-gray-60 rounded-lg p-3 sm:p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                amountDisabled={true}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
