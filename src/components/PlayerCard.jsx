export default function PlayerCard({name, imageUrl}){
    return (
        <>
            <h1>{name}</h1>
            <img src={imageUrl} alt={`Picture of ${name}`} width="300"/>
        </>
    )
}