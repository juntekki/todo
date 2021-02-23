import React from 'react'

const styles = {
    color: 'green'
}

const Thing = ({thing}) => {
    return (
        <li>
            <h2>Työ: {thing.Otsikko} </h2>
            <p>ID: {thing.id}</p>
            <div style = {styles}>
                {thing.Kiireellisyys}
            </div>
        </li>
      )
}

export default Thing