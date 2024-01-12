const API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-PT/';

export default async function getAllPlayers(){
    try{
        const response = await fetch(`${API}players`);
        const json = await response.json();
        return json.data.players;
    } catch (error){
        console.log(error);
    }
}

export async function createPlayer(newPlayer){
    try{
        const response = await fetch(`${API}players`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: newPlayer.name,
                breed: newPlayer.breed,
                status: newPlayer.status,
                imageUrl: newPlayer.imageUrl
            })
        })

    } catch (error){
        console.error(error);
    }

}



