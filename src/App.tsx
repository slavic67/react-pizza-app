
import { useState, type MouseEvent } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/ErrorPage/Error';

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
      <Routes>
        <Route path='/' element={<Menu></Menu>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </>
  )
}

export default App
