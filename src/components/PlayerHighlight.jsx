import { useEffect } from 'react';
import {useState} from 'react'
import {getOnePlayer} from '../API/index.js'
import {useNavigate} from 'react-router-dom'

export default function PlayerHighlight({selectedPlayerId, setSelectedPlayerId}){
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const navigate = useNavigate();

    function handleBackClick(){
        setSelectedPlayerId(null);
    }
    
    useEffect(() => {

        if(!selectedPlayerId){
            navigate("/");
        } else {

            async function setPlayer(){
                const onePlayer = await getOnePlayer(selectedPlayerId);
                setSelectedPlayer(onePlayer);
            }

            setPlayer();
        }

    }, [selectedPlayerId])
    
    return (
        <div className='HighlightPage'>
        {(() => {
                    if (!selectedPlayer){
                        return (
                            <>
                                <p>No Selected Player</p>
                                <button onClick= {() => handleBackClick()}>Go Back</button>
                            </>
                        )
                    } else{
                        return (
                            <div className='PlayerHighlight'>
                                <div className='highlightTitle'>
                                    <h1 className='highlightThisIs'>This is</h1>
                                    <h1 className='highlightName'>{selectedPlayer.name}.</h1>
                                </div> 
                                <div className='highlightCard'>
                                    <div className='highlightInfo'>
                                            <p className='highlightBreed'>Breed: {selectedPlayer.breed}</p>
                                            <p className='highlightStatus'>On the {selectedPlayer.status}</p>
                                            <button className='goBackOnHighlight' onClick= {() => handleBackClick()}>Go Back</button>
                                    </div>
                                    <img className='highlightImage' src={selectedPlayer.imageUrl} alt={`Picture of ${selectedPlayer.name}`} width="600"/>
                                </div>
                            </div>
                        )
                    }

                 }
        )()}
        </div>
    )
}