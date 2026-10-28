import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './App.css'

import Layout from './Layout.jsx'
import About from './About.jsx'
import Course from './Course.jsx'
import Product from './Product.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'Course',
        element: <Course />
      },
      {
        path:'product',
        element: <Product />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App