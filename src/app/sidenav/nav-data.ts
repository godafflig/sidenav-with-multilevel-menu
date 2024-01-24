import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-file',
    label: 'A propros'
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
        routeLink: 'project/Groupietracker',
        label: 'Deeztrack',
      },
      {
        routeLink: 'project/Solfez',
        label: 'Solfez',
      }
    ]
  },
  
  {
    routeLink: 'Passion',
    icon: 'fal fa-camera',
    label: 'Mes passion'
  },
  {
    routeLink: 'Presentation',
   
    icon: 'fal fa-file',
    label: 'CV'
  },
  {
    routeLink: 'Contact',
    icon: 'fal fa-paper-plane',
    label: 'Contacter moi'
  },
];
