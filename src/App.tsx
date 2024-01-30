import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Planets } from './components/Planets'
import { People } from './components/People'

function App() {
  const [page, setPage] = useState<string>('planets')
  return (
    <div className='App'>
      <h1>StarWars Info</h1>
      <Navbar onClick={(e) => setPage(e)} />
      <div className='content'>
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  )
}

export default App
