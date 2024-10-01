"use client";
import React, { useState } from "react";
import MultipleSelect from "@/components/ui/dropdown";
import Image from "next/image";
import { RxDividerVertical } from "react-icons/rx";
import dp from "@/app/assets/listpic.png";
import TabComponent from "@/components/ui/Tab";
import TableComponent from "@/components/Table"; 
import { TableComponent2 } from "@/components/Table2"; 
import {
  BorderedItem,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue); 
  };

  return (
    <div className="h-screen bg-[#FAFBFF] flex flex-col items-start px-[40px] gap-[10px]">
      <div className="flex flex-row items-center justify-between gap-[70px] mt-[5px]">
        <div>
          <MultipleSelect />
        </div>
        <div className="flex flex-row items-center justify-between bg-[#ffffff] w-[369px] py-4 px-5">
          <p className="text-[#26323C] text-[15px] font-[600]">
            Installation Date
          </p>
          <div className="flex flex-row items-center gap-2 text-[#26323C] text-[15px] font-[400]">
            <p>20/05/2022</p>
            <RxDividerVertical size={20} />
            <p>08:30pm</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-[#ffffff] w-[369px] py-3 px-5">
          <p className="text-[#26323C] text-[15px] font-[600]">Operator ID</p>
          <p className="text-[#26323C] text-[15px] font-[400]">#51674738</p>
          <div className="flex flex-row gap-2 items-center">
            <Image src={dp} alt="dp" />
            <p className="text-[#26323C] text-[15px] font-[400]">
              Bessie Cooper
            </p>
          </div>
        </div>
      </div>
      <TabComponent onChange={handleTabChange} />
      {activeTab === 0 && <TableComponent />}
      {activeTab === 1 && <TableComponent2 />}
      <div className="flex items-center justify-center w-full mt-5">
        <Pagination>
          <PaginationContent className="flex items-center space-x-2">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <BorderedItem>1</BorderedItem>
            </PaginationItem>
            <PaginationItem>
              <BorderedItem>2</BorderedItem>
            </PaginationItem>
            <PaginationItem>
              <BorderedItem>3</BorderedItem>
            </PaginationItem>
            <PaginationItem>
              <BorderedItem>...</BorderedItem>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Page;
