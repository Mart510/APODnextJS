// component imports
import Image from 'next/image'
import Heading from './components/heading'

import ApodImageCard from './components/apodImageCard'

// fetch api functions
import { apodFetcher } from './api/apodinator'

const apod = await apodFetcher();

// console.log('apod')
// console.log(apod)

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-900">
      <h1 className="font-mono text-center text-4xl my-4">Apod</h1>
      <div>
        < Heading imageTitle={apod.title} imageDescription={apod.description}/>
        {/* < datePicker /> */}
        < ApodImageCard image={apod.imagesrc} imageAlt={apod.description}/>
        {/* < foot /> */}
      </div>
    </main>
  )
}
