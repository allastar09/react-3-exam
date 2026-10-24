import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './App.css';

import Layout from './Layout.jsx';
import About from './About.jsx';
import { lazy, Suspense } from 'react';
import Course from './Course';

function App() {
  const Catalog = lazy(()=> import('./Course'))
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'Course',
          element: <Course />
        },
      ],
      
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;