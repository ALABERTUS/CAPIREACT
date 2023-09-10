import { useState } from "react"
import { useEffect } from "react"


const Character = () => {
    const [Character, setCharacter] = useState([])

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
            .then(Response => Response.json())
            .then(responseData => {
                let data = responseData.results
                console.log(data)
                setCharacter(data)
            })
    }, [])

    return (
        <div className="container">
            {
                Character.map(Character =>

                    <div className="card" key={(Character.id)}>
                        <img src={Character.image} alt="personaje" />
                        <p>{Character.name}</p>
                    </div>
                )
            }

        </div>
    )
}

export default Character;

