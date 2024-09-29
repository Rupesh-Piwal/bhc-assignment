import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="bg-[#53564E] w-[232.82px] min-h-screen">
      <h2 className="text-[20px] text-[#ffffff] font-[500] italic text-center py-[32px]">
        Bharat <span className="font-[900] font-inter not-italic">TDM</span>
      </h2>
      <div className="flex flex-row items-center gap-2 px-3 bg-[#ffffff] mx-1 py-2.5 rounded-[9.43px] cursor-pointer">
        <GoHome style={{ color: "#53564E", width: "20px", height: "20px" }} />
        <span className="text-[14px] font-[500] text-[#53564E]">Dashboard</span>
      </div>
      <div className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]">
        <FaRegUser style={{ width: "19px", height: "18px" }} />
        <span className="text-[14px] font-[500]">Doctor List</span>
      </div>
      <div className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]">
        <FaRegUser style={{ width: "19px", height: "18px" }} />
        <span className="text-[14px] font-[500]">TDM Management</span>
      </div>
      <div className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]">
        <GoHome style={{ width: "20px", height: "20px" }} />
        <span className="text-[14px] font-[500] ">Homecare Services</span>
      </div>
      <div className="flex flex-row items-center gap-2 px-3  mx-1 py-2.5 rounded-[9.43px] text-[#ffffff] cursor-pointer hover:bg-[#ffffff] hover:text-[#53564E]">
        <GoHome style={{ width: "20px", height: "20px" }} />
        <span className="text-[14px] font-[500] text-[##53564E]">
          Revenue Management
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
