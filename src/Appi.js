import axios from "axios";

axios.defaults.baseURL= "https://api.themoviedb.org"

export const Appi = async ({ abortController }) => {
   const response = await axios('/3/trending/movie/day', {
          params: {
            language: 'en-US',
            api_key: 'd98894650c2d6eb437a7243ac85fc39a'
          },
          signal: abortController.signal
   });
    
    return (
        response.data
    )
}


export const AppiMovieId = async movieId => {
   const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            language: 'en-US',
            api_key: 'd98894650c2d6eb437a7243ac85fc39a'
          },
   });
    
    return (
        response.data
    )
}





export const Credits = async movieId => {
   const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          params: {
            language: 'en-US',
            api_key: 'd98894650c2d6eb437a7243ac85fc39a'
          },
   });
    
    return (
        response.data
    )
}




export const SearchValue = async (trimmedQuery) => {
   const response = await axios( `https://api.themoviedb.org/3/search/movie`, {
       params: {
          query: trimmedQuery,
          include_adult: false,
          language: "en-US",
          api_key: "d98894650c2d6eb437a7243ac85fc39a",
        },
   });
    
    return response
  
}