// src/components/cards/HomeCareServices.tsx

import { HomeCareService } from "@/types"; // Importing the HomeCareService type definition
import Image from "next/image";

interface HomeCareServicesProps {
  services: HomeCareService[]; // Use the HomeCareService interface for props type
}

const HomeCareServices: React.FC<HomeCareServicesProps> = ({ services }) => {
  return (
    <div className="bg-[#ffffff] border border-[#E6E6E6] shadow-sm w-[460px] pt-1 pb-3 rounded-[35px]">
      <div className="flex flex-row items-end justify-between">
        <h2 className="px-[20px] py-[6px] font-[700] text-[18px] text-[#26323C]">
          Home-Care Services
        </h2>

        <p className="text-right py-1 text-[#868686] text-[14px] font-[400] pr-3">
          See more
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-[40px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              className={`bg-[#DDEBFF] ${service.imagePadding} w-[60px] rounded-[6px]`}
              src={service.imageSrc}
              alt={service.label}
              width={42}
              height={42}
            />
            <h2 className="text-[28px] text-[#26323C] font-[700]">
              {service.value}
            </h2>
            <p className="text-[14px] text-[#929292]">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCareServices;
