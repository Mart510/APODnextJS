// title page showing the date for the image being displayed and a short description

export function Heading({imageTitle, imageDescription}) {

    // component return
    return (
        <>
            <h1 className="text-center text-xl">{imageTitle}</h1>
            <p className="italic">{imageDescription}</p>
        </>
    )

}

export default Heading