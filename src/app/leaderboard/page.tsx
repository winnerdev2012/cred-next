"use client"

import { useEffect } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Header from "../../components/header";
import PrivacyPolicy from "../../components/privacyPolicy";
import InviteCode from "../../components/inviteCode";
import Cards from "./cards";
import MyRanking from "./myRanking";
import RankingList from "./rankingList";
import "./index.css";
import Banner from "./banner";
import { getInviteCode } from "../api/invite";
import { useRouter } from "next/navigation";
import {
  fetchRankings,
  updateConnection,
  updateLeaderboardLive,
} from "../../redux/leaderboard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Leaderboard = () => {
  const { connected, account } = useWallet();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initialized = useAppSelector(state => state.globalState.initialized);

  useEffect(() => {
    if (connected && account && initialized && initInviteCode == undefined) {
      router.push("/");
    }
  }, [account, initialized]);

  useEffect(() => {
    dispatch(updateConnection(connected));

    if (connected && account && initInviteCode) {
      dispatch(updateLeaderboardLive(false));

      console.log("dispatching leaderboard", initInviteCode);
      dispatch(fetchRankings(account.address));
    }
  }, [connected, account, initInviteCode]);

  return (
    <div className="relative">
      <Header />
      <Banner />
      <div className="parallax" id="leaderboard">
        <div className="parallax__group">
          <div className="parallax__layer effect1">
            <img src="/leaderboard/effect1.png" alt="effect1" />
          </div>
          <div className="parallax__layer effect2">
            <img src="/leaderboard/effect2.png" alt="effect2" />
          </div>
          <div className="parallax__layer effect3">
            <img src="/leaderboard/effect3.png" alt="effect3" />
          </div>
        </div>
        <div className="relative w-full flex justify-center z-10">
          <div className="w-full md:w-[700px] flex flex-col items-center mt-[116px] mb-10">
            <InviteCode />
            <MyRanking />
            <Cards />
            <RankingList />
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
