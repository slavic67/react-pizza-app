import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Menu } from './pages/Menu/Menu.tsx'
import { Cart } from './pages/Cart/Cart.tsx'
import { Error } from './pages/ErrorPage/Error';
import { Layout } from './layout/Menu/Layout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children : [
        {
          path: '/',
          element: <Menu></Menu>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
    ]
  },
    {
    path: '*',
    element: <Error></Error>
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </StrictMode>,
)
