import { useState } from "react"
import { useEffect } from "react"


const Characters = () => {
    const [Characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
            .then(Response => Response.json())
            .then(responseData => {
                let data = responseData.results
                console.log(data)
                setCharacters(data)
            })
    }, [])

    return (
        <div className="container">
            {
                Characters.map(Character =>

                    <div className="card" key={(Character.id)}>
                        <img src={Character.image} alt="personajes" />
                        <p>{Character.name}</p>
                    </div>
                )
            }

        </div>
    )
}

export default Characters;

