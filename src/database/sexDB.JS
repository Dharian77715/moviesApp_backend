const executeQuery = require("./connectionDB");
const sexQueries = require("./queries/sexQueries");


const getSexById = async ( id ) => {
    try {
        const sex = await executeQuery( sexQueries.select.byId, [id]);
        return sex;
        
    } catch (error) {
        console.error(`Error in sexDB ${ error }`);
        throw error;
    }
};

const getSex = async () => {
    try {
        const sex = await executeQuery( sexQueries.select.all );
        return sex;
    } catch (error) {
        console.error(`Error in sexDB ${ error }`);
        throw error;
    }
};

const createSex = async ({ sex }) => {
    try {
        const { insertId } = await executeQuery( sexQueries.insert, [
            sex
        ] );
        return { id: insertId, sex};
    } catch (error) {
        console.error(`Error in sexDB ${ error }`);
        throw error;
    }
};

const updateSex = async ( id, { sex}  ) => {
    try {
        const { affectedRows } = await executeQuery( sexQueries.update, [
            sex,  
            id
        ]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in sexDB ${ error }`);
        throw error;
    }
};

const deleteSex = async ( id ) => {
    try {
        const { affectedRows } = await executeQuery( sexQueries.delete, [id]);
        return affectedRows;
    } catch (error) {
        console.error(`Error in sexDB ${ error }`);
        throw error;
    }
};

module.exports = {
getSexById,
getSex,
createSex,
updateSex,
deleteSex
}