import React from 'react';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

const sideBar = [
  {
    icon: <ToggleOnIcon />,
    link: '/toggle',
    text: 'Toggles',
  },
  {
    icon: <ToggleOnIcon />,
    link: '/filter',
    text: 'Filtering Conditions',
  },
  {
    icon: <ToggleOnIcon />,
    link: '/history',
    text: 'History',
  },
  {
    icon: <ToggleOnIcon />,
    link: '/app',
    text: 'Applications',
  },
  {
    icon: <ToggleOnIcon />,
    link: '/projects',
    text: 'Projects',
  },
  {
    icon: <ToggleOnIcon />,
    link: '/admin',
    text: 'Admin',
  },
];

export default sideBar;
