export type Theme = "light" | "dark";

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  location: string;
  status: string;
  tagline: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export type ProjectSide = "left" | "right";

export interface ProjectLinks {
  live: string;
  code: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  side: ProjectSide;
  problem: string;
  solution: string;
  role: string;
  technology: string;
  decisions: string[];
  challenges: string;
  outcome: string;
  links: ProjectLinks;
}

export interface AboutContent {
  story: string;
  focus: string;
  learning: string;
  interests: string;
  detail: string;
}

export interface LabItem {
  title: string;
  type: string;
  year: string;
  description: string;
}

export interface NavSection {
  id: string;
  label: string;
}

export interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  reducedMotion: boolean;
  soundOn: boolean;
  setSoundOn: React.Dispatch<React.SetStateAction<boolean>>;
  playSound: (enabled: boolean, freq?: number, duration?: number) => void;
}
