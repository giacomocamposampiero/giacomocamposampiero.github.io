import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  AUTHOR: "Giacomo Camposampiero",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};


export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/giacomocamposampiero"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/giacamp",
  },
  { 
    NAME: "scholar",
    HREF: "https://scholar.google.com/citations?user=B_rpizsAAAAJ",
  }
];
