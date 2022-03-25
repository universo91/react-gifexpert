import { useState,  useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true 
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => setState( {
                data: imgs,
                loading: false
            } ) );
            // .then( setImages ); es equivalente
    },[ category ]);

    return state;
}
