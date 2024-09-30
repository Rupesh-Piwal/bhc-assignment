// src/types.ts

import { StaticImageData } from "next/image";

export interface TdmService {
  imageSrc: string | StaticImageData; // Allows both string and StaticImageData
  value: string | number;
  label: string;
  imagePadding: string;
}

export interface DoctorService {
  imageSrc: string | StaticImageData; // Allowing StaticImageData for images
  value: string | number;
  label: string;
  imagePadding: string;
}

export interface HomeCareService {
  imageSrc: string | StaticImageData; // Allowing StaticImageData for images
  value: string | number;
  label: string;
  imagePadding: string;
}
