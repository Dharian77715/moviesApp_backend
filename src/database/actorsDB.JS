const executeQuery = require("./connectionDB");
const actorQueries = require("./queries/actorQueries");


const getActorById = async ( actor_id ) => {
    try {
        const actors = await executeQuery( actorQueries.select.byId, [actor_id]);
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

const createActor = async ({ name, date_of_birth, sex }) => {
    try {
        const { insertId } = await executeQuery( actorQueries.insert, [
            name,
            date_of_birth,
            sex
        ] );
        return { actor_id: insertId, name, date_of_birth, sex };
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

const updateActor = async ( actor_id, { name, date_of_birth, sex }  ) => {
    try {
        const { affectedRows } = await executeQuery( actorQueries.update, [
            name,
            date_of_birth,
            sex,
            actor_id
        ]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in actorsDB ${ error }`);
        throw error;
    }
};

const deleteActor = async ( actor_id ) => {
    try {
        const { affectedRows } = await executeQuery( actorQueries.delete, [actor_id]);
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