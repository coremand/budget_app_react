import React from 'react'
import "../styles/Card.css"

export default function Card(props) {

    const classes = "card " + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

//Card is a custom component
// It is important to add a white space on the "card "
