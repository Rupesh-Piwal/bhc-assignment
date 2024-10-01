import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { RiEditBoxLine } from "react-icons/ri";
import revenue from "@/app/assets/revenue.png";

const Sidebar = () => {
  return (
    <div className="bg-[#53564E] w-[210px] min-h-screen">
      <h2 className="text-[20px] text-[#ffffff] font-[500] italic text-center py-[32px]">
        Bharat <span className="font-[900] font-inter not-italic">TDM</span>
      </h2>
      <Link
        href="#"
        className="flex flex-row items-center gap-2 px-3 bg-[#ffffff] mx-1 py-2.5 rounded-[9.43px] cursor-pointer"
      >
        <GoHome style={{ color: "#53564E", width: "20px", height: "20px" }} />
        <span className="text-[14px] font-[500] text-[#53564E]">Dashboard</span>
      </Link>
      <Link
        href=""
        className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]"
      >
        <FaRegUser style={{ width: "19px", height: "18px" }} />
        <span className="text-[14px] font-[500]">Doctor List</span>
      </Link>
      <Link
        href="/admin5"
        className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]"
      >
        <FaRegUser style={{ width: "19px", height: "18px" }} />
        <span className="text-[14px] font-[500]">TDM Management</span>
      </Link>
      <Link
        href=""
        className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]"
      >
        <RiEditBoxLine style={{ width: "20px", height: "20px" }} />
        <span className="text-[14px] font-[500] ">Homecare Services</span>
      </Link>
      <Link
        href=""
        className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]"
      >
        {/* <GoHome style={{ width: "20px", height: "20px" }} /> */}
        <Image width={20} height={20} src={revenue} alt="revenue" />
        <span className="text-[14px] font-[500] text-[##53564E]">
          Revenue Management
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
