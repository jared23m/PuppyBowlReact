import { deletePlayer } from "../API/index.js"



export default function PlayerCard({id, name, imageUrl, setRefresh}){

    function handleClick(id){
        deletePlayer(id);
        setRefresh(true);
    }

    return (
        <>
            <h1>{name}</h1>
            <img src={imageUrl} alt={`Picture of ${name}`} width="300"/>
            <button onClick = {() => handleClick(id)}>Delete Player</button>
        </>
    )
}