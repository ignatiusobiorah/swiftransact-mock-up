export interface INav {
  id: number;
  title: string;
  path: string;
  className: string;
}

export const navTitle = [
  {
    id: 1,
    title: "HOME",
    path: "/",
    className: "navItem",
  },
  {
    id: 2,
    title: "ABOUT",
    path: "/about",
    className: "navItem",
  },
  {
    id: 3,
    title: "SIGN IN",
    path: "/sign",
    className: "navItem",
  },
];
