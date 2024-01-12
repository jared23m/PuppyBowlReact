import { useNavigate } from "react-router-dom";
import { deletePlayer, getOnePlayer } from "../API/index.js"



export default function PlayerCard({id, name, imageUrl, refresh, setRefresh, setSelectedPlayerId}){
    const navigate = useNavigate();

    function handleDeleteClick(id){
        deletePlayer(id);
        setRefresh(true);
    }

    function handleLearnClick(id){
        setSelectedPlayerId(id)
        navigate("/highlight");
    }

    return (
        <>
            <h1>{name}</h1>
            <img src={imageUrl} alt={`Picture of ${name}`} width="300"/>
            <button onClick = {() => handleLearnClick(id)}>Learn More</button>
            <button onClick = {() => handleDeleteClick(id)}>Delete Player</button>
        </>
    )
}