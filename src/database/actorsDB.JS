const executeQuery = require("./connectionDB");
const actorQueries = require("./queries/actorQueries");


const getActorById = async ( id ) => {
    try {
        const actors = await executeQuery( actorQueries.select.byId, [id]);
        return actors;
        
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

const getActors = async () => {
    try {
        const actors = await executeQuery( actorQueries.select.all );
        return actors;
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

const createActor = async ({  name, date_of_birth,  spouse, children, country, movies, sex_id }) => {
    try {
        const { insertId } = await executeQuery( actorQueries.insert, [
            name,
            date_of_birth,
            spouse, 
            children, 
            country, 
            movies,
            sex_id
        ] );
        return { id: insertId, name, date_of_birth, spouse, children, country, movies, sex_id };
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

const updateActor = async (  id, { name, date_of_birth,  spouse, children, country, movies, sex_id }  ) => {
    try {
        const { affectedRows } = await executeQuery( actorQueries.update, [
            name,
            date_of_birth,
            spouse, 
            children, 
            country, 
            movies,
            sex_id,
            id
        ]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

const deleteActor = async ( id ) => {
    try {
        const { affectedRows } = await executeQuery( actorQueries.delete, [id]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

module.exports = {
getActorById,
getActors,
createActor,
updateActor,
deleteActor
}