
import { useState, type MouseEvent } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/ErrorPage/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu></Menu>
  },
    {
    path: '/cart',
    element: <Cart></Cart>
  },
    {
    path: '*',
    element: <Error></Error>
  },
])


function App() {

  const [counter, setCounter] = useState<number>(0); 

  const addCounter = (e: MouseEvent) => {
    console.log(e)
  }


  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence='big' onClick={addCounter}>Кнопка</Button>
      <Input placeholder='email'></Input>
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
