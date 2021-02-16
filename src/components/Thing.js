import React from 'react'

const Thing = ({thing}) => {
    return (
        <li>
            <h2>Työ: {thing.Otsikko} </h2>
            <p>ID: {thing.id}</p>
            <p>Kiireellisyys: {thing.Kiireellisyys}</p>
        </li>
      )
}

export default Thing