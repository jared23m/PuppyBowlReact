
export default function Search({className, currentSearch, setCurrentSearch}){
    

    return (
        <div className={className}>
            <form>
                    <label>
                        Search: <input type= 'text' value= {currentSearch} onChange= {(e) => setCurrentSearch(e.target.value)}/>
                    </label>
            </form>
            <button className='clearSearch' onClick={() => setCurrentSearch("")}>Clear Search</button>
        </div>
    )
}