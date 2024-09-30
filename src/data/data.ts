// src/data/servicesData.ts

// DoctorCard Data
import doc from "@/app/assets/maki_doctor.png";
import doc1 from "@/app/assets/maki_doctor-2.png";
import cash from "@/app/assets/payments.png";

export const doctorServicesData = [
  {
    imageSrc: doc,
    value: "50",
    label: "Total Doctors",
    imagePadding: "p-4",
  },
  {
    imageSrc: doc1,
    value: "45",
    label: "Active Doctors",
    imagePadding: "p-4",
  },
  {
    imageSrc: cash,
    value: "₹650",
    label: "Avg Fees",
    imagePadding: "p-4",
  },
];

// TdmInfo Data
import fax from "@/app/assets/openmoji_fax-machine.png";
import fax1 from "@/app/assets/openmoji_fax-machine (1).png";
import user from "@/app/assets/carbon_user-filled.png";

export const tdmInfoData = [
  {
    imageSrc: fax,
    value: "40",
    label: "Total TDMs",
    imagePadding: "p-4",
  },
  {
    imageSrc: fax1,
    value: "05",
    label: "Inactive TDMs",
    imagePadding: "p-4",
  },
  {
    imageSrc: user,
    value: "3540",
    label: "Total Patients",
    imagePadding: "p-4",
  },
];

// HomeCareServices Data
import fax2 from "@/app/assets/openmoji_fax-machine.png";
import wfh from "@/app/assets/Work From Home.png";
import calender from "@/app/assets/calendar_month.png";

export const homeCareServicesData = [
  {
    imageSrc: fax2,
    value: "20",
    label: "Home Care Services",
    imagePadding: "p-4",
  },
  {
    imageSrc: wfh,
    value: "--",
    label: "Health Care Services",
    imagePadding: "p-4",
  },
  {
    imageSrc: calender,
    value: "07",
    label: "Wellness Services",
    imagePadding: "p-4",
  },
];

// TdmServices Data
import bag from "@/app/assets/healthbag.png";
import health from "@/app/assets/health_and_safety.png";
import ecg from "@/app/assets/monitor_heart.png";

export const tdmServicesData = [
  {
    imageSrc: bag,
    value: "3540",
    label: "Total Consultations",
    imagePadding: "p-4",
  },
  {
    imageSrc: health,
    value: "3540",
    label: "Health Checkup",
    imagePadding: "p-4",
  },
  {
    imageSrc: ecg,
    value: "3540",
    label: "ECG",
    imagePadding: "p-4",
  },
];
