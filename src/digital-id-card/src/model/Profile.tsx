export interface Profile {
  name: string;
  title: string;
  image: string;
  experience: string;
  education: string;
  skills: string[];
  links: Links;
}

export interface Links {
  portfolio: string;
  linkedin: string;
  github: string;
  email: string;
}