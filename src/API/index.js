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

export async function deletePlayer(id){
    try{
        const response = await fetch(`${API}players/${id}`, {
            method: 'DELETE'
        })
    } catch (error){
        console.error(error);
    }
}

export async function getOnePlayer(id){
    try{
        const response = await fetch(`${API}players/${id}`);
        const json = await response.json();
        return json.data.player;
    } catch (error){
        console.error(error);
    }
}

createPlayer({name: "duke78", breed: "airedale", status: "field", imageUrl: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"});



