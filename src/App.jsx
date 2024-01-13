import './App.css'
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers.jsx'
import PlayerHighlight from './components/PlayerHighlight.jsx'




function App() {

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");
  const [formName, setFormName] = useState("");
  const [formBreed, setFormBreed] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [formUrl, setFormUrl] = useState("");
  const [nameLengthError, setNameLengthError] = useState("The name must be at least 1 character long.");
  const [breedLengthError, setBreedLengthError] = useState("The breed must be at least 1 character long.");
  const [statusError, setStatusError] = useState("The status must be either 'field' or 'bench.'");
  const [rememberScroll, setRememberScroll] = useState(0)
  
  return (
    <>
      <Routes>
        <Route path="/highlight" element= {<PlayerHighlight selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId}/>} />
        <Route path="/" element={<AllPlayers setSelectedPlayerId={setSelectedPlayerId} 
                                              currentSearch={currentSearch} 
                                              setCurrentSearch={setCurrentSearch}
                                              formName={formName}
                                              setFormName={setFormName}
                                              formBreed={formBreed}
                                              setFormBreed={setFormBreed}
                                              formStatus={formStatus}
                                              setFormStatus={setFormStatus}
                                              formUrl={formUrl}
                                              setFormUrl={setFormUrl}
                                              nameLengthError={nameLengthError}
                                              setNameLengthError={setNameLengthError}
                                              breedLengthError={breedLengthError}
                                              setBreedLengthError={setBreedLengthError}
                                              statusError={statusError}
                                              setStatusError={setStatusError}
                                              rememberScroll={rememberScroll}
                                              setRememberScroll={setRememberScroll}/>} />
      </Routes>
    </>
  )
}

export default App
