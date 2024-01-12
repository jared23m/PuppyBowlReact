import getAllPlayers from '../API/index.js'
import {useState, useEffect} from 'react'
import PlayerCard from './PlayerCard.jsx'
import Search from './Search.jsx'




export default function AllPlayers({setSelectedPlayerId, currentSearch, setCurrentSearch}){
    const [playersArr, setPlayersArr] = useState([]);
    const [visibleArr, setVisibleArr] = useState(playersArr);
    const [refresh, setRefresh] = useState(false);
    const [done, setDone] = useState(false);
    

    useEffect(() => {
        async function updatePlayersArr(){
            const newPlayersArr = await getAllPlayers();
            setDone(true);
            setPlayersArr(newPlayersArr);
            setVisibleArr(playersArr);
        }

        updatePlayersArr();
        setRefresh(false);
    }, [refresh])

    useEffect(() => {
        setDone(false);
        if (currentSearch === ""){
            setVisibleArr(playersArr);
        } else {
            const visiblePlayers = playersArr.filter((player) => {
                return (player.name.includes(currentSearch));
            })
            setVisibleArr(visiblePlayers);
        }
    }, [currentSearch, done])

    return (
        <>
            <Search currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
            {(() => {
                    if (visibleArr.length === 0) {
                        return <p>No Players</p>
                    } else {
                        return (
                            visibleArr.map((player) => {
                                return <PlayerCard key={player.id} id={player.id} name={player.name} imageUrl={player.imageUrl} refresh={refresh} setRefresh={setRefresh} setSelectedPlayerId= {setSelectedPlayerId}/>
                            })
                        )
                    }
                }
            )()}
        </>
    )
}