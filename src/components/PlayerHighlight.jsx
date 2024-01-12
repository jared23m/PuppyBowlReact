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
        <>
        {(() => {
                    if (!selectedPlayer){
                        return <p>No Selected Player</p>
                    } else{
                        return (
                            <>
                                <h1>{selectedPlayer.name}</h1>
                                <p>{selectedPlayer.breed}</p>
                                <p>{selectedPlayer.status}</p>
                                <img src={selectedPlayer.imageUrl} alt={`Picture of ${selectedPlayer.name}`} width="300"/>
                            </>
                        )
                    }

                 }
        )()}
        <button onClick= {() => handleBackClick()}>Go Back</button>
        </>
    )
}