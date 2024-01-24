import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import BookList from './components/BookList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header home="Home" BookList="Book List" addBook="Add Book" />
        <BookList />

      </div>
    </>
  )
}

export default App
