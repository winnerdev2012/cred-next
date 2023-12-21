import { useWallet } from "@aptos-labs/wallet-adapter-react";
import PrimaryButton from "../../../components/primaryButton";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleWalletPanel } from "../../../redux/dialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";
import { checkInviteCode, getInviteCode } from "../../api/invite";
import { updateInitInviteCode } from "../../../redux/credpoints";
import { updateStep } from "../../../redux/global";
import PrivacyPolicy from "../../../components/privacyPolicy";

const Box = () => {
  const { connected, account } = useWallet();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const step = useAppSelector((state) => state.globalState.step);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const onInviteCode = async () => {
    if (!account) return;

    try {
      const inputCode = otp.toUpperCase();
      const res = await checkInviteCode(inputCode);

      if (res.success == false)
        setError("The invite code is not valid. Find one on socials!");
      else {
        dispatch(updateInitInviteCode(inputCode));
        router.push("/credPoints");
      }
    } catch (e) {
      setError("The invite code is not valid. Find one on socials!");
    }
  };

  useEffect(() => {
    const checkSignup = async () => {
      if (connected && account) {
        const res = await getInviteCode(account.address);
        if (res.success == true) {
          dispatch(updateInitInviteCode(res.code));
          router.push("/credPoints");
        } else {
          dispatch(updateStep(1));
        }
      } else {
        dispatch(updateStep(0));
      }
    };
    checkSignup();
  }, [connected]);

  const onConnectWallet = () => {
    if (!connected) dispatch(toggleWalletPanel(true));
  };

  return (
    <div className="connect-button mt-16 md:mt-[10vh] flex flex-col items-center">
      <div className="container connect-button mt-2 p-4 md:p-10 w-[95%] md:w-[550px] flex flex-col items-center border border-gray-light-2 rounded-xl">
        {step == 1 && (
          <>
            <p className="mt-4 text-center text-base md:text-xl font-bold">
              Insert an invite code
            </p>
            <p className="text-center text-base md:text-xl">
              to check out your Cred points!
            </p>
            <div className="mt-6">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={5}
                renderSeparator={<span className="w-3"></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle="otp-input"
              />
            </div>
            <div className="mt-2 flex justify-center items-center h-4">
              {error && (
                <p className="text-sm font-semibold text-[#DC3232]">{error}</p>
              )}
            </div>
            <PrimaryButton
              className="mt-2 md:mt-8 w-[300px] z-[4]"
              onClick={() => onInviteCode()}
            >
              <span className="text-sm md:text-base">Insert invite code</span>
            </PrimaryButton>
          </>
        )}
        {step == 0 && (
          <>
            <p className="mt-4 text-center text-base md:text-xl">
              Connect wallet to check out your Cred points!
            </p>
            <PrimaryButton
              className="mt-2 md:mt-8 z-[4]"
              onClick={() => onConnectWallet()}
            >
              <span className="text-sm md:text-base">Connect Wallet</span>
            </PrimaryButton>
          </>
        )}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <p className="text-base md:text-xl">Supporting&nbsp;</p>
        <img src="/home/aptos.svg" alt="aptos" className="h-4 md:h-6" />
        <p className="text-base md:text-xl">&nbsp;and more...</p>
      </div>
      <div className="mt-8">
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default Box;
