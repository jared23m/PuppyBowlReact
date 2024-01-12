import { useEffect, useState } from "react"

export default function Search({playersArr, setVisibleArr}){
    const [currentSearch, setCurrentSearch] = useState("");

    useEffect(() => {
        if (currentSearch === ""){
            setVisibleArr(playersArr);
        } else {
            const visiblePlayers = playersArr.filter((player) => {
                return (player.name.includes(currentSearch));
            })
            setVisibleArr(visiblePlayers);
        }
    }, [currentSearch])

    return (
        <>
            <form>
                    <label>
                        Search: <input type= 'text' value= {currentSearch} onChange= {(e) => setCurrentSearch(e.target.value)}/>
                    </label>
            </form>
        </>
    )
}