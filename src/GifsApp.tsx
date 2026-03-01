import { useState } from 'react'
// import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {
   //ferchoss99
//
//
   //prueba estera
   //
   //
   //
   //dddddddd
   //
   //
   //
   //
   //
   //

//
   //

   //
//
   //

//

//

//

   
   // const [first, setfirst] = useState(second)
    const [gifs, setGifs] = useState <Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string)=>{

        console.log({term});
    };

    // El handle se usa para indicar que es un manejador de algo 
    const handleSearch =async(query:string)=>{
        console.log({query});
        query=query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return; //para no repetidos

        setPreviousTerms([query, ...previousTerms].splice(0, 8));
        const gifs =await getGifsByQuery(query);
        //console.log({gifs});
        setGifs(gifs);
    };

  return (
    <>
        {/**Header */}
        <CustomHeader title="Buscador de Gifs"  description='Descubre y comparte el Gif perfecto '/>
        


        {/* Search */}
        
        <SearchBar 
        placeholder="Busca lo que quieras"
        //handleSearch={(query:string)=>handleSearch(query)}
        //Cuando hay un valor en el query
        onQuery={handleSearch}
        /> 

        {/* Búsquedas previas */}
        <PreviousSearches
            searches={previousTerms} 
            //onLabelClicked={handleTermClicked}
            onLabelClicked={(term:string)=>handleTermClicked(term)}

            />

        {/* Gifs */}
        {/* <GifList gifs={mockGifs}/> */}
        <GifList gifs={gifs}/>




    
    </>

  )
}
