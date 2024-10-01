import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "yakitori.dev",
  DESCRIPTION: "Yakitori's dev blog about blockchain.",
  EMAIL: "contact|at|yakitori.dev",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Yakitori's dev blog about blockchain.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/yakitoricapital",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Oni-giri",
  },
];
