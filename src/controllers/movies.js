const { response, request } = require('express');
const { getGenreByMovieId } = require('../database/genresDB.JS');
const { getMovies, deleteMovie, getMovieById, updateMovie, createMovie } = require('../database/moviesDB.JS');

const successMessages = {
    created: 'Movie added correctly',
    deleted: 'Movie deleted correctly',
    updated: 'Movie updated correctly'
}

const getResponse = ( message, success = true, data = null ) => {
    return { message, success, data};
}

const getMergedMoviesWithGenres= async (movies )=>{
      
        const moviesWithGenres=[];
        for(movie of movies ){
          const genres = await getGenreByMovieId(movie.id);
          moviesWithGenres.push({...movie, genres});
          
        }
       return moviesWithGenres;
    }

const getAllMovies = async (req = request, res = response) => {
    try {
        const movies = await getMovies()
        const mergedMoviesWithGenres= await getMergedMoviesWithGenres(movies);
        res.status(200).json( mergedMoviesWithGenres);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}



const getMoviesById = async (req = request, res = response) => {
   
    const { id } = req?.params;

    try {
        const movies = await getMovieById(id);
        res.status(200).json(movies);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const postMovies = async (req = request, res = response) => {
    
    const movies = req?.body;
    try {
        const createdMovie = await createMovie( movies );
        res.status(200).json( getResponse( successMessages.created, true, createdMovie ));
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}

const updateMovies = async (req = request, res = response) => {
   
    const movies = req?.body;
    const { id } = req?.params;

    try {
        await updateMovie( id, movies );
        res.status(200).json( getResponse( successMessages.updated ))
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}

const deleteMovies =  async (req = request, res = response) => {
   
    const { id } = req?.params;

    try {
     await deleteMovie( id );
      res.status(200).json( getResponse(successMessages.deleted ))
    } catch (error) {
     console.log('controller', error);
     res.status(400).json(getResponse( error.message, false ))
     }
}


module.exports = {
    getAllMovies,
    getMoviesById,
    postMovies,
    updateMovies,
    deleteMovies
}