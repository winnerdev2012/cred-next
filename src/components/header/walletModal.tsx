"use client"


import { useEffect } from "react";
import { toggleWalletPanel } from "../../redux/dialog";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import WalletButtons from "../../wallet-adapter/WalletButtons";
import { useRouter } from "next/navigation";

const WalletModal = () => {

  const isOpen = useAppSelector((state) => state.dialogState.bWalletPanel);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`${isOpen ? "block" : "hidden"
        } absolute z-20 inset-0 flex justify-center items-center bg-gray-dark-1`}
    >
      <div className="relative w-[400px]  bg-gray-light-6 border-gray-light-3 rounded-md p-8">
        <p className="text-2xl font-bold text-center">Connect your wallet</p>
        <p className="px-10 font-semibold text-center mt-4">
          Connect an Aptos wallet from the list or create a new one
        </p>
        <WalletButtons />
        <p className="text-sm font-semibold text-center mt-8 leading-[200%]">
          By connecting your wallet, you agree to the &nbsp;
          <span
            onClick={() => {
              router.push("/tos");
              dispatch(toggleWalletPanel(false));
            }}
            className="text-primary-dark cursor-pointer"
          >
            Terms & Conditions
          </span>
          &nbsp; and &nbsp;
          <span
            onClick={() => {
              router.push("/privacy");
              dispatch(toggleWalletPanel(false));
            }}
            className="text-primary-dark cursor-pointer"
          >
            Privacy Policy
          </span>
        </p>
        <div
          className="absolute top-6 right-6 w-4 h-4 cursor-pointer"
          onClick={() => dispatch(toggleWalletPanel(false))}
        >
          <p className="text-3xl font-bold">×</p>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
