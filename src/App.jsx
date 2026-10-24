import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './App.css';

import Layout from './Layout';
import Home from './Home';
import { lazy, Suspense } from 'react';

function App() {
  const Catalog = lazy(()=> import('./Catalog'))
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'catalog',
          element: <Suspense fallback={<div><h1>Finit Him</h1></div>}>
            <Catalog/>
          </Suspense>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;