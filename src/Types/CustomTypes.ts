export type ProjectType = "design" | "code" | "photo" | null;

export type LinkType = {
  link: string;
  label: string;
};

export type ProjectTileType = {
  key: string;
  client: string;
  title: string;
  tags: TagType[];
  type: ProjectType[];
  cover: string;
};

export type CardWidth = "half" | "full";
export type CardType = "text" | "image";

export type ProjectPageCardType = {
  type: CardType;
  content: string;
  width: CardWidth;
};

export type CreditsInfo = {
  name: string;
  role: string;
  link?: string;
};

export type ProjectPageType = {
  client: string;
  title: string;
  headline: string;
  intro: string;
  link?: LinkType[];
  tags: TagType[];
  type: ProjectType[];
  cover: string;
  content: ProjectPageCardType[];
  credits?: CreditsInfo[];
};

export type AllProjects = {
  [key: string]: ProjectPageType;
};

export type PressInfo = {
  name: string;
  client: string;
  link: string;
};

export type ExperienceInfo = {
  name: string;
  company: string;
  location: string;
  duration: string;
};

export type ContactInfo = {
  title: string;
  link: string;
};

export type TagSize = "small" | "large";

export type TagType =
  | "packaging"
  | "web design"
  | "app design"
  | "brand identity"
  | "editorial"
  | "type design"
  | "illustration"
  | "copywriting"
  | "processing"
  | "frontend"
  | "backend"
  | "react"
  | "firebase"
  | "sequelize"
  | "express.js"
  | "documentation";
