import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-2xl flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black/90 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="text"
          className="outline-none w-max bg-transparent py-1.5"
          placeholder="Please Enter Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            if (onAmountChange) onAmountChange(e.target.value);
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/90 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black/50"
          value={selectedCurrency}
          onChange={(e) => {
            if (onCurrencyChange) onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Inputbox;
