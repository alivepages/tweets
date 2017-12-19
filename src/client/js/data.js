import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'Estadísticas', icon: <Assessment/>, link: '/stats' },
    { text: 'Visitantes', icon: <Web/>, link: '/visits' },
    { text: 'Últimas visitas', icon: <Web/>, link: '/all' },
    { text: 'Usuarios', icon: <GridOn/>, link: '/users' },
    { text: 'Salir', icon: <PermIdentity/>, link: '/login' }
  ]
};

export default data;
