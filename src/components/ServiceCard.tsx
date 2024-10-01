// src/components/ServiceCard.tsx
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  imageSrc: string | StaticImageData; 
  value: string | number;
  label: string;
  imagePadding: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  value,
  label,
  imagePadding,
}) => {
  return (
    <div className="service-card">
      <div style={{ padding: imagePadding }}>
        <Image
          src={typeof imageSrc === "string" ? imageSrc : imageSrc.src}
          alt={label}
        />
      </div>
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
