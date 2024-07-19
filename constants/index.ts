export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/symbols/images/devi.jpeg",
    name: "Devi Shetty",
  },
  {
    image: "/symbols/images/naresh.jpeg",
    name: "Naresh Trehan",
  },
  {
    image: "/symbols/images/prathap.jpeg",
    name: "Prathap C. Reddy",
  },
  {
    image: "/symbols/images/abhay.jpeg",
    name: "Abhay Bang",
  },
  {
    image: "/symbols/images/apurba.jpeg",
    name: "Apurba Ganguly",
  },
  {
    image: "/symbols/images/indira-hinduja.png",
    name: "Indira Hinduja",
  },
  {
    image: "/symbols/images/badrinath.jpg",
    name: "S. S. Badrinath",
  },
  {
    image: "/symbols/images/padmavati.jpg",
    name: "S. I. Padmavati",
  },
  {
    image: "/symbols/images/sunita.jpeg",
    name: "Sunita Dube",
  },
];

export const StatusIcon = {
  scheduled: "/symbols/icons/check.svg",
  pending: "/symbols/icons/pending.svg",
  cancelled: "/symbols/icons/cancelled.svg",
};
