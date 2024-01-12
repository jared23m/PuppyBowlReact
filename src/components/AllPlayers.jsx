import getAllPlayers from '../API/index.js'
import {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard.jsx'




export default function AllPlayers(){
    const [playersArr, setPlayersArr] = useState([]);
    

    useEffect(() => {
        async function updatePlayersArr(){
            const newPlayersArr = await getAllPlayers();
            setPlayersArr(newPlayersArr);
        }

        updatePlayersArr();
    }, [])

    return (
        <>
            {(() => {
                    if (playersArr.length === 0) {
                        return <p>No Players</p>
                    } else {
                        return (
                            playersArr.map((player) => {
                                return <PlayerCard key={player.id} name={player.name} imageUrl={player.imageUrl}/>
                            })
                        )
                    }
                }
            )()}
        </>
    )
}