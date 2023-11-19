'use client'
// title page showing the date for the image being displayed and a short description

import { useState } from "react"

// morning add text truncation with show more/show less button


export function Heading({imageTitle, imageDescription}) {
    
    // create state, default to false to hide text
    const [showFullDescription, setFullDescription] = useState(false);
    
    // function to toggle between full text or not
    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription)
    }
    
    // set's descrition to either be full string or first 42 char's based on if state is true/false
    const description = showFullDescription ? imageDescription : imageDescription.slice(0,144)

    // component return
    return (
        <>
            <h1 className="text-center text-xl">{imageTitle}</h1>
            <p className="italic">{description}</p>
            <button onClick={showFullDescriptionHandler}>Read {showFullDescription ? "less" : "more"}</button>
        </>
    )

}

export default Heading