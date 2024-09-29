import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import dp from "@/app/assets/admin.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="text-[#26323C] h-[74px] flex flex-row items-center">
      <div className="min-w-[700px]">
        <div className="flex flex-row items-center gap-2 px-[40px]">
          <CiSearch size={28} style={{ opacity: "50%" }} />
          <input
            className="px-2 py-1.5 outline-none"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center ml-auto px-[80px]">
        <IoNotificationsOutline size={30} />
        <IoIosHelpCircleOutline size={30} />
        <RxDividerVertical size={30} style={{ opacity: "50%" }} />
        <div className="flex flex-row gap-4 items-center">
          <Image
            className="rounded-full"
            src={dp}
            width={48}
            height={48}
            alt="admin-dp"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-inter text-[18px] font-bold leading-[21.78px] text-left">
              Admin Name
            </h2>
            <p className="font-inter text-[12px] font-normal leading-[14.52px] text-left">
              Staff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
