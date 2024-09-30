import Image from "next/image";
import exp from "@/app/assets/clarity_export-line.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Export = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-[#F2F2F2] rounded-[20px] px-[60px] py-[40px]">
        <Image src={exp} alt="export" width={94} height={94} />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              className="text-[#8F8F8F]"
              placeholder="Select the Format"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem value="Export the Current Data" id="r1" />
            <Label
              className="text-[#000000] text-[13px] font-[400]"
              htmlFor="r1"
            >
              Export the Current Data
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Export the Whole Data" id="r2" />
            <Label
              className="text-[#000000] text-[13px] font-[400]"
              htmlFor="r2"
            >
              Export the Whole Data
            </Label>
          </div>
        </RadioGroup>
        <div className="mt-4">
          <button className="bg-[#26323C] text-[#ffffff] text-[17px] font-[400] rounded-[10px] min-w-[192px] py-2 ">
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Export;
