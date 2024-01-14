import getAllPlayers from '../API/index.js'
import {useState, useEffect, useRef} from 'react'
import PlayerCard from './PlayerCard.jsx'
import Search from './Search.jsx'
import AddPlayerForm from './AddPlayerForm.jsx'




export default function AllPlayers({setSelectedPlayerId, currentSearch, setCurrentSearch, formName, setFormName, formBreed, setFormBreed, formStatus, setFormStatus, formUrl, setFormUrl, nameLengthError, setNameLengthError, breedLengthError, setBreedLengthError, statusError, setStatusError, rememberScroll, setRememberScroll}){
    const [playersArr, setPlayersArr] = useState([]);
    const [visibleArr, setVisibleArr] = useState(playersArr);
    const [refresh, setRefresh] = useState(false);
    const [done, setDone] = useState(false);
    const [confirm, setConfirm] = useState(false);

    
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
        window.scrollTo(0, rememberScroll);
    }, [done])

    useEffect(() => {
        setDone(false);
        if (currentSearch === ""){
            setVisibleArr(playersArr);
        } else {
            const lowerCaseSearch = currentSearch.toLowerCase();
            let weakSearchFilter = playersArr.filter((player) => {
                return (player.name.toLowerCase().includes(lowerCaseSearch));
            })
            let strongSearchFilter = [];
            for (let index in weakSearchFilter){
                if (lowerCaseSearch === weakSearchFilter[index].name.toLowerCase().slice(0, currentSearch.length)){
                    strongSearchFilter.push(weakSearchFilter[index]);
                    weakSearchFilter.splice(index, 1);
                }
            }

            setVisibleArr(strongSearchFilter.concat(weakSearchFilter));
        }
    }, [currentSearch, done])

    return (
        <>
            <AddPlayerForm className={'AddPlayerForm'}
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
                            setRefresh={setRefresh}
                            confirm= {confirm}
                            setConfirm={setConfirm}
                            setRememberScroll={setRememberScroll}/>
            <Search className={'Search'} currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
            <div className='middle'>
                {(() => {
                        if (visibleArr.length === 0) {
                            return <p>No Players</p>
                        } else {
                            return (
                                <div className="PlayerList">
                                {visibleArr.map((player) => {
                                    return <PlayerCard key={player.id} className="PlayerCard" id={player.id} name={player.name} imageUrl={player.imageUrl} refresh={refresh} setRefresh={setRefresh} setSelectedPlayerId= {setSelectedPlayerId} setConfirm={setConfirm} setRememberScroll={setRememberScroll} rememberScroll={rememberScroll}/>
                                })}
                                </div>
                            )
                        }
                    }
                )()}
            </div>
        </>
    )
}