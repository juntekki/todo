import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Thing from "./components/Thing"


const addThing = (event) => {
    //do something
}

const App = () => {
    const [things, setThings] = useState([])
    const [newThing, setNewThing] = useState('')
    const [newId, setNewId] = useState('')


    useEffect(() => {
        axios
            .get('http://localhost:3001/TODO')
            .then(response => {
                setThings(response.data)
            })
    }, [])


    return (
        <div>
            <h1>TODO LIST:</h1>
            <form onSubmit={addThing}>
                
                <div>
                    Uusi työ:
                    <input
                        value={newThing}
                    />
                    ID:
                    <input
                        value={newId}
                    />
                    Kiireellinen
                    <input
                        name="Kiireellinen"
                        type="checkbox"
                    />
                </div>
            </form>
            <button type="submit">Lisää</button>
            <ul>
                {things.map(thing => <Thing key={thing.id} otsikko={thing.otsikko} kiireellisyys={thing.kiireellisyys} thing={thing} />)}
            </ul>
        </div>
    )
}


console.log("npx json-server --port=3001 --watch db.json")
export default App