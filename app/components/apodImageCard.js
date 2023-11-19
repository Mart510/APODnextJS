// contains the image from APOD and the buttons to change it

export function ApodImageCard({image, imageAlt}) { 
    // component return
    return (
        <>
        <img src={image} alt={imageAlt} className="rounded-2xl"/> 
        </>
    )
}

export default ApodImageCard