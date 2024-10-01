import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const beneficiaries = [
  {
    name: "Wegomed Pvt Ltd",
    type: "Health care Provider",
    id: "#51674738",
    email: "debra.holt@example.com",
    contact: "0000000000",
    settlementTime: "Daily",
    amountSharing: "5%",
  },
  {
    name: "BHC",
    type: "Service Provider",
    id: "#51674738",
    email: "bill.sanders@example.com",
    contact: "0000000000",
    settlementTime: "",
    amountSharing: "10%",
  },
  {
    name: "Kristin Watson",
    type: "Operator",
    id: "#51674738",
    email: "bill.sanders@example.com",
    contact: "0000000000",
    settlementTime: "Monthly",
    amountSharing: "5%",
  },
  {
    name: "Doctors",
    type: "Doctor",
    id: "#51674738",
    email: "bill.sanders@example.com",
    contact: "0000000000",
    settlementTime: "Daily",
    amountSharing: "80%",
  },
];

export function TableComponent2() {
  return (
    <Table className="w-full bg-[#ffffff] rounded-t-[14px]">
      <TableHeader>
        <TableRow className="hover:bg-gray-100">
          <TableHead className="py-5 px-4 text-[#26323C] text-[15px] font-[600]">
            Beneficiaries Name
          </TableHead>
          <TableHead className="py-5 text-[#26323C] text-[15px] font-[600]">
            Type
          </TableHead>
          <TableHead className="py-5 text-[#26323C] text-[15px] font-[600]">
            ID
          </TableHead>
          <TableHead className="py-5 text-[#26323C] text-[15px] font-[600]">
            Email
          </TableHead>
          <TableHead className="py-5 text-[#26323C] text-[15px] font-[600]">
            Contact Number
          </TableHead>
          <TableHead className="py-5 text-[#26323C] text-[15px] font-[600]">
            Settlement Time
          </TableHead>
          <TableHead className="py-5 text-[#26323C] text-[15px] font-[600]">
            Amount Sharing
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {beneficiaries.map((beneficiary, index) => (
          <TableRow key={index} className="hover:bg-gray-100">
            <TableCell
              className={`py-4 text-[16px] font-[500] ${
                beneficiary.name === "Doctors"
                  ? "text-[#0C8487]"
                  : "text-[#53564E]"
              }`}
            >
              {beneficiary.name}
            </TableCell>
            <TableCell className="py-4 text-[#53564E] text-[15px] font-[400]">
              {beneficiary.type}
            </TableCell>
            <TableCell className="py-4 text-[#53564E] text-[15px] font-[400]">
              {beneficiary.id}
            </TableCell>
            <TableCell className="py-4 text-[#53564E] text-[15px] font-[400]">
              {beneficiary.email}
            </TableCell>
            <TableCell className="py-4 text-[#53564E] text-[15px] font-[400]">
              {beneficiary.contact}
            </TableCell>
            <TableCell className="py-4 text-[#53564E] text-[15px] font-[400]">
              {beneficiary.settlementTime}
            </TableCell>
            <TableCell className="py-4 text-[#53564E] text-[15px] font-[400]">
              {beneficiary.amountSharing}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
