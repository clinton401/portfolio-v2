export interface Project {
  id: string;
  title: string;
  description: string;
  cover?: string;
  tags?: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  details?: string[];
  tech?: string[];
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export type ThemeMode = "dark" | "light";

export interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}
