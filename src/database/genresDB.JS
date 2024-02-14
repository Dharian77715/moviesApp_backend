
const executeQuery = require("./connectionDB");
const genreQueries = require("./queries/genreQueries");


const getGenreById = async ( id ) => {
    try {
        const genre = await executeQuery( genreQueries.select.byId, [id]);
        return genre;
        
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};
const getGenreByMovieId = async ( movieId ) => {
    try {
        const genre = await executeQuery( genreQueries.select.genresByMovieId, [movieId]);
        return genre;
        
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};
const getMoviesGenres = async ( movies_id, genres_id ) => {
    try {
        const genre = await executeQuery( genreQueries.select.moviesGenres, [movies_id, genres_id]);
        return genre;
        
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};

const getGenre = async () => {
    try {
        const genre = await executeQuery( genreQueries.select.all );
        return genre;
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};

const createGenre = async ({ movies_id, genres_id, active }) => {

    try {
        const { insertId } = await executeQuery( genreQueries.insert, [
            movies_id, genres_id, active
        ] );
        return { id:insertId, movies_id, genres_id, active};
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};


const updateGenre = async ( id, { genre}  ) => {
    try {
        const { affectedRows } = await executeQuery( genreQueries.update, [
            genre,  
            id
        ]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};
const updateMoviesGenres = async ({ movies_id, genres_id, active}) => {

    try {
        const { affectedRows } = await executeQuery( genreQueries.updateMoviesGenres, [
            active,
            movies_id, 
            genres_id,  
        ]);

        return affectedRows;
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};

const deleteGenre = async ( id ) => {
    try {
        const { affectedRows } = await executeQuery( genreQueries.delete, [id]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in genreDB ${ error }`);
        throw error;
    }
};

module.exports = {
getGenreById,
getGenre,
createGenre,
updateGenre,
deleteGenre,
getGenreByMovieId,
getMoviesGenres,
updateMoviesGenres
}