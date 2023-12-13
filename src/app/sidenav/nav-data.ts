import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-user',
    label: 'Mon CV'
  },
  {
    routeLink: 'products',
    icon: 'fal fa-laptop-code',
    label: 'Projets',
    items: [
      {
        routeLink: 'project/1',
        label: 'Ca roule ma poule',
      },
      {
        routeLink: 'project/2',
        label: 'sokoban',
      }
    ]
  },
  {
    routeLink: 'pages',
    icon: 'fal fa-file',
    label: 'Pages'
  },
  {
    routeLink: 'media',
    icon: 'fal fa-camera',
    label: 'Media'
  },
];
