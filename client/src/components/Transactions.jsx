import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData";

import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
  index,
}) => {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl
      border-[0.5px] border-solid border-stone-500 border-opacity-30
      "
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base mb-4">Amount: {amount} ETH</p>
          {message && (
            <>
              <img
                src={dummyData[index]?.url}
                alt=""
                className="w-full rounded-lg object-cover"
              />
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-medium text-[14px]">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="grid grid-cols-4 gap-x-5 mt-10">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
