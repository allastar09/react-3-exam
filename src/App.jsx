import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './App.css'

import Layout from './Layout.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home /> 
      },
      {
        path: '',
        element:""
      },
      {
        path:'',
        element:""
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App