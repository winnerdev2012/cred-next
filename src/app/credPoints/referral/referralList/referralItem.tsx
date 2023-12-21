import { DefiIcon, DefiLink, DefiName } from "../../../../constant/defi";
import { ReferralType } from "../../../../types/referralType";
import moment from "moment";
import { getBoringAvatar } from "../../../../utils/boringAvatar";

interface Props {
  data: ReferralType;
}

const ReferralItem: React.FC<Props> = ({ data }) => {
  return (
    <a
      target="_blank"
      className=" cursor-pointer"
    >
      <div className="group py-6 px-2 md:px-8 flex justify-between hover:bg-gray-light-1">
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-light-5">
            {moment(data.createdAt).format("MMM DD YYYY")}
          </p>
          <div className="flex gap-1 items-center">
            <img
              src={getBoringAvatar(data.toWallet)}
              className="w-5 h-5"
              alt="avatar"
            />
            <p className="text-xs md:text-sm text-gray-light-5 group-hover:text-white">
              {data.toWallet.slice(0, 5)}...{data.toWallet.slice(-4)}
            </p>
          </div>
          <img
            src="/credpoints/external_link.svg"
            className="hidden group-hover:block w-[16px] h-[16px]"
            alt="cred"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold">50</p>
          <img
            src="/credpoints/cred.svg"
            className="w-[22px] h-[22px]"
            alt="cred"
          />
        </div>
      </div>
      <div className="h-px border border-gray-light-1" />
    </a>
  );
};

export default ReferralItem;
