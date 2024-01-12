import {useState, useEffect} from 'react'

export default function AddPlayerForm(){
    const [formName, setFormName] = useState("");
    const [formBreed, setFormBreed] = useState("");
    const [formStatus, setFormStatus] = useState("");
    const [formUrl, setFormUrl] = useState("");
    const [nameLengthError, setNameLengthError] = useState("The name must be at least 1 character long.");
    const [breedLengthError, setBreedLengthError] = useState("The breed must be at least 1 character long.");
    const [statusError, setStatusError] = useState("The status must be either 'field' or 'bench.'");
    const [buttonDisabled, setButtonDisabled] = useState("true");
    const [buttonId, setButtonId] = useState("disabled");
    const [errorsUpdated, setErrorsUpdated] = useState(false);

    useEffect(() => {

        if (formName.length === 0) {
            setNameLengthError("The name must be at least 1 character long.");
        } else if (formName.length > 8) {
            setNameLengthError("The name must be less than 9 characters long.");
        } else {
            setNameLengthError("");
        }

        if (formBreed.length === 0) {
            setBreedLengthError("The breed must be at least 1 character long.");
        } else if (formBreed.length > 8) {
            setBreedLengthError("The breed must be less than 9 characters long.")
        } else {
            setBreedLengthError("");
        }

        if((formStatus != "field") && (formStatus != "bench")){
            setStatusError("The status must be either 'field' or 'bench.'")
        } else {
            setStatusError("");
        }

        setErrorsUpdated(true);

    }, [formName, formBreed, formStatus])

    useEffect(() => {
        setErrorsUpdated(false);

        if((nameLengthError != "") || (breedLengthError != "") || (statusError != "")){
            setButtonDisabled("true");
            setButtonId("disabled");
        } else {
            setButtonDisabled("false");
            setButtonId("submit");
        }

    }, [errorsUpdated])
    
    return (
        <>
            <h2>Add Player</h2>
            {(nameLengthError.length != 0) && <p>{nameLengthError}</p>}
            {(breedLengthError.length != 0) && <p>{breedLengthError}</p>}
            {(statusError.length !=0) && <p>{statusError}</p>}
            <form>
                <div id='entries'>
                    <label>
                        Name: <input type= 'text' value= {formName} onChange= {(e) => setFormName(e.target.value)}/>
                    </label>
                    <label>
                        Breed: <input type= 'text' value= {formBreed} onChange= {(e) => setFormBreed(e.target.value)}/>
                    </label>
                    <label>
                        Status: <input type= 'text' value= {formStatus} onChange= {(e) => setFormStatus(e.target.value)}/>
                    </label>
                    <label>
                        Image URL: <input type= 'text' value= {formUrl} onChange= {(e) => setFormUrl(e.target.value)}/>
                    </label>
                </div>
                <button  id={buttonId} disabled={{buttonDisabled}}>Submit</button>
            </form>
            
        </>
    )
}