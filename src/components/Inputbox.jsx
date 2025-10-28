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
    <div
      className={`bg-white p-3 rounded-lg text-lg sm:text-2xl flex ${className}`}
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between">
        <label htmlFor={id} className="text-black/90 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="text"
          className="outline-none  bg-transparent py-1.5"
          placeholder="Enter Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
      <div>
        <p className="text-black/90 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black/50"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      </div>
    </div>
  );
}

export default Inputbox;
