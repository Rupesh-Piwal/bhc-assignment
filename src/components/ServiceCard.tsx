// src/components/ServiceCard.tsx
import { StaticImageData } from "next/image";

interface ServiceCardProps {
  imageSrc: string | StaticImageData; // Update to accept both types
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
      {/* Displaying the image */}
      <div style={{ padding: imagePadding }}>
        <img
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
