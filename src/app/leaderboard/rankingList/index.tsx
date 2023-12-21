import { useAppSelector } from "../../../redux/hooks";
import { RankingType } from "../../../types/rankingType";
import RankingItem from "./rankingItem";

const RankingList = () => {
  const topRankings = useAppSelector(
    (state) => state.leaderboardState.topRankings
  );
  return (
    <div className="mt-32  py-5 w-full  flex flex-col items-center">
      <p className="text-center text-3xl font-bold">Top 500 addresses by CRED score</p>
      <div className="mt-2 w-8 h-px border border-secondary-default" />
      <div
        className="container mt-8 w-full border border-gray-light-4 rounded-2xl"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="w-full h-full flex flex-col">
          {topRankings.map((user, index) => (
            <RankingItem data={user} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingList;
