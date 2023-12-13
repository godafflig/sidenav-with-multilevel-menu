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
        routeLink: 'project/sokoban',
        label: 'sokoban',
      },
      {
        routeLink: 'project/Easypitch',
        label: 'Easypitch',
      },
      {
        routeLink: 'project/Couplefamille',
        label: 'Couplefamille',
      },
      {
        routeLink: 'project/CaRouleMaPoule',
        label: 'CaRouleMaPoule',
      },
      {
        routeLink: 'project/Biggerthanme',
        label: 'Biggerthanme',
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
