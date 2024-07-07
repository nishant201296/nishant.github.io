import { SocialMediaPlatform } from "@/app/constants/socials";

export interface PersonalData {
  summary: string;
  basics: Basics;
  work: Work[];
}

export interface Basics {
  resume_url: string;
  name: string;
  profile_img: string;
  email: string;
  current_location: string;
  phone: string;
  socials: {
    [key in SocialMediaPlatform]: string;
  };
}

export interface Work {
  company: string;
  position: string;
  website: string;
  highlights: string[];
  location: string;
  start_date: string;
  end_date: string;
}
