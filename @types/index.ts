export interface IProject {
  title: string;
  github: string;
  link?: string;
  lang: string[];
  background: string;
}

export interface ISocial {
  title: string;
  link: string;
  icon: React.ReactNode;
}