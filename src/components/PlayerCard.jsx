import { useNavigate } from "react-router-dom";
import { deletePlayer, getOnePlayer } from "../API/index.js"



export default function PlayerCard({className, id, name, imageUrl, refresh, setRefresh, setSelectedPlayerId, setConfirm, setRememberScroll, rememberScroll}){
    const navigate = useNavigate();

    function handleDeleteClick(id){
        setRememberScroll(window.scrollY);
        deletePlayer(id);
        setRefresh(true);
    }

    function handleLearnClick(id){
        setRememberScroll(window.scrollY);
        setConfirm(false);
        setSelectedPlayerId(id);
        navigate("/highlight");
    }

    return (
        <div className={className}>
            
            <h1>{name}</h1>
            <div className='cardSide'>
                <img src={imageUrl} alt={`Picture of ${name}`} width="500"/>
                <div className='cardButtons'>
                    <button className='learnMoreButton'onClick = {() => handleLearnClick(id)}>Learn More</button>
                    <button className='deleteButton' onClick = {() => handleDeleteClick(id)}>Delete Player</button>
                </div>
            </div>
        </div>
    )
}