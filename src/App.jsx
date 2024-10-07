import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
<br /><br />
<Routes>
<Route path='/' element={<Todo/>}></Route>
</Routes>
    </>
  )
}

export default App