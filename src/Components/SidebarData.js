import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
  {
    title: 'ExceltoJson',
    path: 'exceltojson',
    icon: <AiIcons.AiFillFileExcel />,
    cName: 'nav-text'
  },
  {
    title: 'ReactAdmin',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];