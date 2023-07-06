import { useState } from "react"
import { useEffect } from "react"


const People = () => {
    const [People, setPeople] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/')
            .then(Response => Response.json())
            .then(responseData => {
                let data = responseData.results
                console.log(data)
                setPeople(data)
            })
    }, [])

    return (
        <div className="container">
            {
                People.map(People =>

                    <div className="card" key={(People.id)}>
                        <img src={People.image} alt="personaje" />
                        <p>{People.name}</p>
                    </div>
                )
            }

        </div>
    )
}

export default People;

