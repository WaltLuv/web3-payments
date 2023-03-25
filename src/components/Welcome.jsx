import React, { useContext } from "react";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import logo from "../../images/logo.png";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <img src={logo} alt="logo" className="w-32 cursor-pointer fontSize={21} text-white" />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Blocklock
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Wallet Address of person receiving crypto" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount you are sending (MATIC)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Reason for payment" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Message to receiver" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#8F00FF] hover:bg-[#00FFFF] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center flex-col mf:mr-10 md:p-20 py-12 px-4">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Welcome to the Blocklock Web3 Dashboard!
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Send crypto payments across the world<br />in MATIC on the Polygon Blockchain.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#00FFFF] p-3 rounded-full cursor-pointer hover:bg-[#8F00FF]"
            >
              <BsFillCreditCard2FrontFill className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Payments
            </div>
            <div className={companyCommonStyles}>Digital Marketing</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Real Estate NFTs
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              NFT Marketplace
            </div>
            <div className={companyCommonStyles}>Web3 Title/Escrow</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Web3 Syndication
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
