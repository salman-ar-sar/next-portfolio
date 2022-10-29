interface SanityBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBase {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  landingImage: SanityImage;
  name: string;
  phoneNumber: string;
  profilePic: SanityImage;
  role: string;
  socials: Social[];
}

export interface Technology extends SanityBase {
  _type: "skill";
  image: SanityImage;
  title: string;
}

export interface Project extends SanityBase {
  _type: "project";
  deployedLink: string;
  image: SanityImage;
  summary: string;
  technologies: Technology[];
  title: string;
}

export interface Experience extends SanityBase {
  _type: "experience";
  company: string;
  companyImage: SanityImage;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Social extends SanityBase {
  _type: "social";
  title: string;
  url: string;
}
