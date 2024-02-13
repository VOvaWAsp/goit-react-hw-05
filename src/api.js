import axios from "axios"


export const fetchData = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA2NWU1YWFhMjI1MjY2NmQ3MWIyYmFjNWFlODg4NiIsInN1YiI6IjY1Yzk1NWJkZTI5NWI0MDE2MmY4Y2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1pkgXaqJ4IOV42hqrQ589bW88H067HmLNd0HBApIf8'
        }
    }
    const fetchData = await axios.get(url, options)
    return fetchData.data
}

export const fetchMovieApi = async ({ query }) => {
        console.log({query})

    const url = 'https://api.themoviedb.org/3/search/movie?'
    const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA2NWU1YWFhMjI1MjY2NmQ3MWIyYmFjNWFlODg4NiIsInN1YiI6IjY1Yzk1NWJkZTI5NWI0MDE2MmY4Y2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1pkgXaqJ4IOV42hqrQ589bW88H067HmLNd0HBApIf8'
        },
        params: {
            page: 1,
            query,
        }
    }
    const fetchMovie = await axios.get(url, options)
    return fetchMovie.data
}

export const fetchMovieById = async movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`
   const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA2NWU1YWFhMjI1MjY2NmQ3MWIyYmFjNWFlODg4NiIsInN1YiI6IjY1Yzk1NWJkZTI5NWI0MDE2MmY4Y2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1pkgXaqJ4IOV42hqrQ589bW88H067HmLNd0HBApIf8'
       },
    }
    const fetchData = await axios.get(url, options);
    return fetchData.data;
}

export const fetchMovieByCast = async movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?`
   const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA2NWU1YWFhMjI1MjY2NmQ3MWIyYmFjNWFlODg4NiIsInN1YiI6IjY1Yzk1NWJkZTI5NWI0MDE2MmY4Y2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1pkgXaqJ4IOV42hqrQ589bW88H067HmLNd0HBApIf8'
       },
    }
    const fetchData = await axios.get(url, options);
    return fetchData.data.cast;
}

export const fetchMovieByReviews = async movieId => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?`
   const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzA2NWU1YWFhMjI1MjY2NmQ3MWIyYmFjNWFlODg4NiIsInN1YiI6IjY1Yzk1NWJkZTI5NWI0MDE2MmY4Y2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J1pkgXaqJ4IOV42hqrQ589bW88H067HmLNd0HBApIf8'
       },
    }
    const fetchData = await axios.get(url, options);
    return fetchData.data.results;
}