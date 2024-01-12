import './App.css'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers.jsx'




function App() {

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [newPlayer, setNewPlayer] = useState({name: "duke4", breed: "airedale", status: "field", imageUrl: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"});
  
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
      </Routes>
    </>
  )
}

export default App
