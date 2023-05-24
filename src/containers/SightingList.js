import { Sighting } from "../components/common/sighting/Sighting"

export function SightingList ({
    sightingPage
}) {

    // const Sightings = () =>{
    //     var sight = []

    //     sightingPage.results.map((sighting) =>{
    //         sight.push(
    //             <div className="sighting-item">
    //                 <h2>SL{sighting.description}</h2>
    //             </div>
    //         )
    //     })

    //     return sight
    // }
    // return <Sightings />

    // console.log(sightingPage)
    return <>
        {sightingPage ? 
        
        <div>
            {sightingPage.map((sight) => {

                return <Sighting sighting={sight} />
            })}
        </div>

        :

        <p>nada</p>
        
        }
    </>
}