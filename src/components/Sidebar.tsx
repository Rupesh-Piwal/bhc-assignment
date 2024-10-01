"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { RiEditBoxLine } from "react-icons/ri";
import revenue from "@/app/assets/revenue.png";
import { usePathname } from "next/navigation"; // Import usePathname hook

const Sidebar = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="bg-[#53564E] w-[210px] min-h-screen">
      <h2 className="text-[20px] text-[#ffffff] font-[500] italic text-center py-[32px]">
        Bharat <span className="font-[900] font-inter not-italic">TDM</span>
      </h2>

      {/* Dashboard Link */}
      <Link
        href="/"
        className={`flex flex-row items-center gap-2 px-3 mx-1 py-2.5 rounded-[9.43px] cursor-pointer ${
          pathname === "/"
            ? "bg-[#ffffff] text-[#53564E]"
            : "text-[#ffffff] hover:bg-[#ffffff] hover:text-[#53564E]"
        }`}
      >
        <GoHome
          style={{
            color: pathname === "/" ? "#53564E" : "#ffffff",
            width: "20px",
            height: "20px",
          }}
        />
        <span className="text-[14px] font-[500]">Dashboard</span>
      </Link>

      {/* Doctor List Link */}
      <Link
        href="/doctor-list"
        className={`flex flex-row items-center gap-2 px-3 mx-1 py-2.5 rounded-[9.43px] cursor-pointer ${
          pathname === "/doctor-list"
            ? "bg-[#ffffff] text-[#53564E]"
            : "text-[#ffffff] hover:bg-[#ffffff] hover:text-[#53564E]"
        }`}
      >
        <FaRegUser style={{ width: "19px", height: "18px" }} />
        <span className="text-[14px] font-[500]">Doctor List</span>
      </Link>

      {/* TDM Management Link */}
      <Link
        href="/admin5"
        className={`flex flex-row items-center gap-2 px-3 mx-1 py-2.5 rounded-[9.43px] cursor-pointer ${
          pathname === "/admin5"
            ? "bg-[#ffffff] text-[#53564E]"
            : "text-[#ffffff] hover:bg-[#ffffff] hover:text-[#53564E]"
        }`}
      >
        <FaRegUser style={{ width: "19px", height: "18px" }} />
        <span className="text-[14px] font-[500]">TDM Management</span>
      </Link>

      {/* Homecare Services Link */}
      <Link
        href="/homecare-services"
        className={`flex flex-row items-center gap-2 px-3 mx-1 py-2.5 rounded-[9.43px] cursor-pointer ${
          pathname === "/homecare-services"
            ? "bg-[#ffffff] text-[#53564E]"
            : "text-[#ffffff] hover:bg-[#ffffff] hover:text-[#53564E]"
        }`}
      >
        <RiEditBoxLine style={{ width: "20px", height: "20px" }} />
        <span className="text-[14px] font-[500]">Homecare Services</span>
      </Link>

      {/* Revenue Management Link */}
      <Link
        href="/revenue-management"
        className={`flex flex-row items-center gap-2 px-3 mx-1 py-2.5 rounded-[9.43px] cursor-pointer ${
          pathname === "/revenue-management"
            ? "bg-[#ffffff] text-[#53564E]"
            : "text-[#ffffff] hover:bg-[#ffffff] hover:text-[#53564E]"
        }`}
      >
        <Image width={20} height={20} src={revenue} alt="revenue" />
        <span className="text-[14px] font-[500]">Revenue Management</span>
      </Link>
    </div>
  );
};

export default Sidebar;
