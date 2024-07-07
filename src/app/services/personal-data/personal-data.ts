import { PersonalData, Work } from "./personal-data.types";

export const PERSONAL_DATA_CACHE_TAG = "personal-data";
import { basics, summary, work } from "../../../assets/json/resume.json";

export async function getPersonalData(): Promise<PersonalData> {
  return {
    basics: {
      resume_url: basics.resume_url,
      current_location: basics.current_location,
      email: basics.email,
      name: basics.name,
      phone: basics.phone.uae,
      profile_img: "@/assets/images/pic.jpeg",
      socials: {
        Github: basics.socials.github,
        LinkedIn: basics.socials.linkedin,
        Twitter: basics.socials.twitter,
      },
    },
    summary: summary,
    work: work.map((w) => {
      return {
        company: w.company,
        end_date: w.endDate,
        highlights: w.highlights,
        location: w.location,
        position: w.position,
        start_date: w.startDate,
        website: w.website,
      } as Work;
    }),
  };
}
