import getAllPlayers from '../API/index.js'
import {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard.jsx'




export default function AllPlayers({setSelectedPlayerId}){
    const [playersArr, setPlayersArr] = useState([]);
    const [refresh, setRefresh] = useState(false);
    

    useEffect(() => {
        async function updatePlayersArr(){
            const newPlayersArr = await getAllPlayers();
            setPlayersArr(newPlayersArr);
        }

        updatePlayersArr();
        setRefresh(false);
    }, [refresh])

    return (
        <>
            {(() => {
                    if (playersArr.length === 0) {
                        return <p>No Players</p>
                    } else {
                        return (
                            playersArr.map((player) => {
                                return <PlayerCard key={player.id} id={player.id} name={player.name} imageUrl={player.imageUrl} setRefresh={setRefresh} setSelectedPlayerId= {setSelectedPlayerId}/>
                            })
                        )
                    }
                }
            )()}
        </>
    )
}