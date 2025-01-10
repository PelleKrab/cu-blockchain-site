import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
// import Leadership from './pages/Leadership';
// import Events from './pages/Events';
// import Join from './pages/Join';

// Define the type of the route elements
interface RouteType {
  path: string;
  element: React.ReactNode; // JSX elements are ReactNode
}

export const routes: RouteType[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  // { path: '/leadership', element: <Leadership /> },
  // { path: '/events', element: <Events /> },
  // { path: '/join', element: <Join /> },
];
