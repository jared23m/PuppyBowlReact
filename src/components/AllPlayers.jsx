import getAllPlayers from '../API/index.js'
import {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard.jsx'
import Search from './Search.jsx'




export default function AllPlayers({setSelectedPlayerId}){
    const [playersArr, setPlayersArr] = useState([]);
    const [visibleArr, setVisibleArr] = useState(playersArr);
    const [refresh, setRefresh] = useState(false);
    

    useEffect(() => {
        async function updatePlayersArr(){
            const newPlayersArr = await getAllPlayers();
            setPlayersArr(newPlayersArr);
        }

        updatePlayersArr();
        setRefresh(false);
    }, [refresh])

    useEffect(() => {
        async function updatePlayersArr(){
            const newPlayersArr = await getAllPlayers();
            setVisibleArr(newPlayersArr);
        }

        updatePlayersArr();
    }, [])

    return (
        <>
            <Search playersArr={playersArr} setVisibleArr={setVisibleArr}/>
            {(() => {
                    if (visibleArr.length === 0) {
                        return <p>No Players</p>
                    } else {
                        return (
                            visibleArr.map((player) => {
                                return <PlayerCard key={player.id} id={player.id} name={player.name} imageUrl={player.imageUrl} setRefresh={setRefresh} setSelectedPlayerId= {setSelectedPlayerId}/>
                            })
                        )
                    }
                }
            )()}
        </>
    )
}