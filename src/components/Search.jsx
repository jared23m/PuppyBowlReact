
export default function Search({currentSearch, setCurrentSearch}){
    

    return (
        <>
            <form>
                    <label>
                        Search: <input type= 'text' value= {currentSearch} onChange= {(e) => setCurrentSearch(e.target.value)}/>
                    </label>
            </form>
            <button onClick={() => setCurrentSearch("")}>Clear Search</button>
        </>
    )
}