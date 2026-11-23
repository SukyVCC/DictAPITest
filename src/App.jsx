import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import SingleWord from './SingleWord'
import Index from './Index'
import NotFoundPage from './NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/word/:keyword' element={<SingleWord/>}/>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
