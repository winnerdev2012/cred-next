import Share from "../../../components/share";
import { useAppSelector } from "../../../redux/hooks";

const MyTotal = () => {
  const myPoint = useAppSelector((state) => state.credpointsState.totalPoint);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold">MY TOTAL CRED POINTS</h1>
      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="container md:ml-16 px-8 py-1 w-auto flex gap-2 justify-center items-center border-[3px] md:border-4 border-primary-default rounded-full">
          <p className="text-[38px] md:text-[57px] font-semibold">
            {myPoint.toLocaleString()}
          </p>
          <img
            src="/credpoints/cred.svg"
            alt="cred"
            className="w-9 md:w-[54px]"
          />
        </div>
        <Share />
      </div>
      <p className="mt-4 text-center text-sm md:text-base">
        Reward points are calculated to reflect your current activities.<br />
        Some activities may take longer for the blockchain to update.
      </p>
    </div>
  );
};

export default MyTotal;
