import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import Bessie from "@/app/assets/Bessie.png";
import Kristin from "@/app/assets/kristin.png";
import cameron from "@/app/assets/cameron.png";
import Image from "next/image";

const emails = [
  "debra.holt@example.com",
  "bill.sanders@example.com",
  "bill.sanders@example.com",
  "bill.sanders@example.com",
  "bill.sanders@example.com",
  "bill.sanders@example.com",
];

const phoneNumbers = [
  "0000000000",
  "0000000000",
  "0000000000",
  "0000000000",
  "0000000000",
  "0000000000",
];

const amounts = ["$1500", "$1500", "$1500", "$1500", "$1500", "$1500"];

const doctorNames = [
  "Bessie Cooper",
  "Kristin Watson",
  "Cameron Will",
  "Bessie Cooper",
  "Bessie Cooper",
  "Bessie Cooper",
];

const TableComponent = () => {
  const getImageForRow = (index: number) => {
    if (index === 1) return Kristin;
    if (index === 2) return cameron;
    return Bessie;
  };

  return (
    <Table className="w-full bg-[#ffffff] rounded-t-[14px]">
      <TableHeader>
        <TableRow className="hover:bg-gray-100">
          <TableHead className="py-4 px-4 text-[#26323C] text-[15px] font-[600] ">
            Time
          </TableHead>
          <TableHead className="py-4 text-[#26323C] text-[15px] font-[600]">
            Assigned Doctor
          </TableHead>
          <TableHead className="py-4 text-[#26323C] text-[15px] font-[600]">
            Doctor ID
          </TableHead>
          <TableHead className="py-4 text-[#26323C] text-[15px] font-[600]">
            Email
          </TableHead>
          <TableHead className="py-4 text-[#26323C] text-[15px] font-[600]">
            Contact Number
          </TableHead>
          <TableHead className="py-4 text-[#26323C] text-[15px] font-[600]">
            Total Amount
          </TableHead>
          <TableHead className="py-4 text-[#26323C] text-[15px] font-[600]">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(6)].map((_, index) => (
          <TableRow key={index} className="hover:bg-gray-100">
            <TableCell className="py-3 text-[#53564E] text-[16px] font-[500]">
              09:30pm
            </TableCell>
            <TableCell className="py-3">
              <div className="flex items-center space-x-2">
                <Image
                  width={35}
                  height={35}
                  src={getImageForRow(index)}
                  alt="Doctor"
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-[#26323C] text-[14px]">
                    {doctorNames[index]}
                  </p>
                  <p className="text-[#26323C] text-[12px]">
                    <span className="font-[700]">General Physician</span>,
                    MBBS,MD
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell className="py-3 text-[#53564E] text-[15px] font-[400]">
              #51674738
            </TableCell>
            <TableCell className="py-3 text-[#53564E] text-[15px] font-[400]">
              {emails[index]}
            </TableCell>
            <TableCell className="py-3 text-start text-[#53564E] text-[15px] font-[400]">
              {phoneNumbers[index]}
            </TableCell>
            <TableCell className="py-3 text-[#53564E] text-[15px] font-[400]">
              {amounts[index]}
            </TableCell>
            <TableCell className="py-3">
              <div className="flex space-x-2">
                <Trash2 className="text-[#FF1B1B] cursor-pointer" size={20} />
                <span className="text-[#0C8487] underline cursor-pointer">
                  Edit
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
