// contains the server side component to fetch images from APOD
const API_KEY = process.env.API_KEY



export async function apodFetcher({fetchSelector = 'blank'} = {}) {
    // if null just get the APOD
    if (fetchSelector === 'blank') {
        console.log('fetching APOD')

        try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

        if (response.ok) {
            console.log('Fetch worked, parsing now')
            const responseObj = await response.json();
            // creating payload to use in props
            const returnObj = {
                date: responseObj.date,
                title: responseObj.title,
                copyright: responseObj.copyright || false,
                imagesrc: responseObj.url,
                description: responseObj.explanation,
            }
            
            return returnObj;

        } else {
            throw new Error('Error '+ response.status)
        };
        } catch (error) {
            console.error(error)
            }
    }
    // if 
}