import React from "react";
import { Badge } from "@/components/ui/badge"; // Adjust the import according to your structure

const TransactionHistory = () => {
  return (
    <div className="p-4 bg-[#ffffff] rounded-[26px] border-[#DBDBDB] shadow-md">
      <h2 className="text-[#26323C] text-[18px] font-[700] text-left">
        Transaction History
      </h2>
      <p className="text-right text-[#868686] text-[14px] font-[400] cursor-pointer">
        See All
      </p>
      <table className="w-full mt-4 border-collapse">
        <thead className="bg-[#F3F3F3] rounded-t-[20px]">
          <tr>
            <th className="py-2 text-[#797979] text-[14px] font-[600] text-center border-b border-gray-300 rounded-tl-[12px] px-2 ">
              Date
            </th>
            <th className="py-2 text-[#797979] text-[14px] font-[600] text-center border-b border-gray-300">
              Invoice ID
            </th>
            <th className="py-2 text-[#797979] text-[14px] font-[600] text-center border-b border-gray-300">
              Amount
            </th>
            <th className="py-2 text-[#797979] text-[14px] font-[600] text-center border-b border-gray-300 rounded-tr-[12px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <p className="text-[#304364] text-[16px] font-[500]">
                24 May 2024
              </p>
              <p className="text-[#6B6B6B] text-[13px] font-[500]">09:27 PM</p>
            </td>
            <td className="py-2 text-[#787878] text-[16px] font-[400]">
              0P06R769I09
            </td>
            <td className="py-2 text-[#26323C] text-[25px] font-[700]">
              ₹30,000
            </td>
            <td className="py-2">
              <Badge className="bg-[#E2FFF5] text-[17px] text-[#45CFA0] py-1 px-4">
                Success
              </Badge>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <p className="text-[#304364] text-[16px] font-[500]">
                25 May 2024
              </p>
              <p className="text-[#6B6B6B] text-[13px] font-[500]">10:00 AM</p>
            </td>
            <td className="py-2 text-[#787878] text-[16px] font-[400]">
              0P06R769I09
            </td>
            <td className="py-2 text-[#26323C] text-[25px] font-[700]">
              ₹15,000
            </td>
            <td className="py-2">
              <Badge className="bg-[#FFFFF0] text-[17px] text-[#AFA91D] py-1 px-4">
                Pending
              </Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
