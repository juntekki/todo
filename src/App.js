import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Thing from "./components/Thing"


const App = () => {
    const [things, setThings] = useState([])
    const [isImportant, setImportant] = useState(true)
    const [newId, setNewId] = useState('')
    const [ newJob, setNewJob ] = useState('')


    useEffect(() => {
        axios
            .get('http://localhost:3001/TODO')
            .then(response => {
                setThings(response.data)
            })
    }, [])

    const handleJobChange = (event) => {
        console.log(event.target.value)
        setNewJob(event.target.value)
    }

    const handleIdChange = (event) => {
        setNewId(event.target.value)
    }


    const handleImportantChange = (event) => {
        if (isImportant === true) {
            setImportant(false)
        }
        else {
            setImportant(true)
        }
    }


    const addThing = (event) => {
        event.preventDefault()
        let importance = ''

        if (isImportant) {
            importance = "Kiireellinen"
        }

        else {
            importance = "Ei kiireellinen"
        }


        const noteObject = {
            Otsikko: newJob,
            id: newId,
            Kiireellisyys: importance
          }

        setThings(things.concat(noteObject))
        setNewJob('')
        setNewId('')
        setImportant(false)
    }


    return (
        <div>
            <h1>TODO LIST:</h1>
            <form onSubmit={addThing}>
                
                <div>
                    Uusi työ:
                    <input
                        value={newJob}
                        onChange={handleJobChange}
                    />
                    ID:
                    <input
                        value={newId}
                        onChange={handleIdChange}
                    />
                    Kiireellinen
                    <input
                        onChange={handleImportantChange}
                        name="Kiireellinen"
                        type="checkbox"
                        checked={isImportant}
                    />
                </div>
                <div>
                <button type="submit">Lisää</button>
                </div>
            </form>
            <ul>
                {things.map(thing => <Thing key={thing.id} otsikko={thing.otsikko} kiireellisyys={thing.kiireellisyys} thing={thing} />)}
            </ul>
        </div>
    )
}


console.log("npx json-server --port=3001 --watch db.json")
export default App