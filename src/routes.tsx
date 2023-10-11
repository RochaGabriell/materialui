import { createBrowserRouter } from 'react-router-dom'
import Base from './layouts/Base'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Products from './pages/Products'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path: '/',
        element: <Products />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default routes
