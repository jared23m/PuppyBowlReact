import './App.css'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers.jsx'
import PlayerHighlight from './components/PlayerHighlight.jsx'




function App() {

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");
  
  return (
    <>
      <Routes>
        <Route path="/highlight" element= {<PlayerHighlight selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId}/>} />
        <Route path="/" element={<AllPlayers setSelectedPlayerId={setSelectedPlayerId} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>} />
      </Routes>
    </>
  )
}

export default App
