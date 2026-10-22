export type Experience = {
  org: string;
  role: string;
  description: string;
  url: string;
};

export const experience: Experience[] = [
  {
    org: "ADPList",
    role: "Mentor",
    description: "Mentoring product and early founders",
    url: "https://adplist.org/mentors/amber-liang",
  },
  {
    org: "Lorong AI",
    role: "Speaker",
    description:
      "Spoke on adaptive, AI-native ERPs at AI Wednesdays: Women in Tech, an International Women's Day showcase of female tech leaders.",
    url: "https://luma.com/3ms616wn",
  },
  {
    org: "USC Dornsife",
    role: "Alumni Mentor",
    description:
      "Mentoring current students through the USC Dornsife Alumni Mentor Program.",
    url: "https://dornsife.usc.edu/careerpathways/mentorship-programs/alumni-mentors/",
  },
];
