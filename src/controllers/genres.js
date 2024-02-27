const { response, request } = require('express');
const { updateMoviesGenres } = require('../database/genresDB.JS');
const { getMoviesGenres } = require('../database/genresDB.JS');
const { getGenreByMovieId } = require('../database/genresDB.JS');
const { getGenre, getGenreById, createGenre, deleteGenre, updateGenre } = require('../database/genresDB.JS');




const successMessages = {
    created: 'Genre added correctly',
    deleted: 'Genre deleted correctly',
    updated: 'Genre updated correctly'
}

const getResponse = ( message, success = true, data = null ) => {
    return { message, success, data};
}

const getAllGenres = async (req = request, res = response) => {
    try {
        const genres = await getGenre()
        res.status(200).json( genres);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const getGenresById = async (req = request, res = response) => {
   
    const { id } = req?.params;

    try {
        const genres = await getGenreById(id)
        res.status(200).json(genres);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const getGenresByMoviesId = async (req = request, res = response) => {
   
    const { movieId } = req?.params;

    try {
        const genres = await getGenreByMovieId(movieId)
        res.status(200).json(genres);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}



const postGenres = async (req = request, res = response) => {
    const { movies_id, genres_id } = req.body;
    
    try {

        for (genre of genres_id) {

             await createGenre({ movies_id, genres_id:genre.genres_id, active: 1});   

        }
        res.status(200).json(getResponse(successMessages.created, true));
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse(error.message, false));
    }
}


const updateGenres = async (req = request, res = response) => {
   
    const { movies_id, genres_id } = req.body;

    try {

        for (genre of genres_id) {
            let genres = await getMoviesGenres(movies_id, genre.genres_id )
            if (genres.length > 0) {
                await updateMoviesGenres({ movies_id, genres_id:genre.genres_id, active: genre.active ? 1 : 0})
            }
            else{
                await createGenre({ movies_id, genres_id:genre.genres_id, active: 1});   
            }
        }
        res.status(200).json(getResponse(successMessages.created, true));
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse(error.message, false));
    }
}


const deleteGenres =  async (req = request, res = response) => {
   
    const { id } = req?.params;

    try {
     await deleteGenre( id );
      res.status(200).json( getResponse(successMessages.deleted ))
    } catch (error) {
     console.log('controller', error);
     res.status(400).json(getResponse( error.message, false ))
     }
}





module.exports = {
getAllGenres,
getGenresById,
postGenres,
updateGenres,
deleteGenres,
getGenresByMoviesId
}



  

