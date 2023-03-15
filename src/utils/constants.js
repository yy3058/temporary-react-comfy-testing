import React from 'react';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import FeedIcon from '@mui/icons-material/Feed';
import sofa from '../assets/products/sofa.png';
import mirror from '../assets/products/mirror.png';
import lamp from '../assets/products/lamp.png';
import table from '../assets/products/table.png';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },
  {
    id: 3,
    text: 'about',
    url: '/about',
  },
];

export const services = [
  {
    id: 1,
    icon: <AutoAwesomeMotionIcon />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <AutoGraphIcon />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <FeedIcon />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

export const newArrivals = [
  {
    id: 1,
    name: 'Arm Sofas',
    price: 54.8,
    img: sofa,
  },
  {
    id: 2,
    name: 'Living Table',
    price: 89.99,
    img: table,
  },
  {
    id: 3,
    name: 'Floor Lamp',
    price: 54.8,
    img: lamp,
  },
  {
    id: 4,
    name: 'Mirror',
    price: 45.8,
    img: mirror,
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
