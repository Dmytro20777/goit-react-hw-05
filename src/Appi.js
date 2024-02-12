import axios from "axios";

axios.defaults.baseURL= "https://api.themoviedb.org"

export const GetTrendingDay = async ({ abortController }) => {
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



export const movieReviews = async movieId => {
   const response = await axios(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
          params: {
            language: 'en-US',
            api_key: 'd98894650c2d6eb437a7243ac85fc39a',
            page: 1
          },
   });
    
    return (
        response.data
    )
}


export const GetMovieDatails = async movieId => {
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





export const GetCast = async movieId => {
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




export const GetMovieByValue = async (trimmedQuery) => {
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