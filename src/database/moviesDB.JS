const executeQuery = require("./connectionDB");
const movieQueries = require("./queries/movieQueries");


const getMovieById = async ( id ) => {
    try {
        const movies = await executeQuery( movieQueries.select.byId, [id]);
        return movies;
        
    } catch (error) {
        console.error(`Error in moviesDB ${ error }`);
        throw error;
    }
};

const getMovies = async () => {
    try {
        const movies = await executeQuery( movieQueries.select.all );
        return movies;
    } catch (error) {
        console.error(`Error in moviesDB ${ error }`);
        throw error;
    }
};

const createMovie = async ({ title, release_date }) => {
    try {
        const { insertId } = await executeQuery( movieQueries.insert, [
            title,  
            release_date
        ] );
        return { id: insertId, title, release_date};
    } catch (error) {
        console.error(`Error in moviesDB ${ error }`);
        throw error;
    }
};

const updateMovie = async ( id, { title, release_date}  ) => {
    try {
        const { affectedRows } = await executeQuery( movieQueries.update, [
            title,  
            release_date,
            id
        ]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in moviesDB ${ error }`);
        throw error;
    }
};

const deleteMovie = async ( id ) => {
    try {
        const { affectedRows } = await executeQuery( movieQueries.delete, [id]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in moviesDB ${ error }`);
        throw error;
    }
};

module.exports = {
getMovieById,
getMovies,
createMovie,
updateMovie,
deleteMovie 
}