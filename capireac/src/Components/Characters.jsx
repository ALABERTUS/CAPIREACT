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
                Characters.map(Characters =>

                    <div className="card" key={(Characters.id)}>
                        <img src={Characters.image} alt="personajes" />
                        <p>{Characters.name}</p>
                    </div>
                )
            }

        </div>
    )
}

export default Characters;

