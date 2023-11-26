const { response, request } = require('express');
const { getActors, getActorById, createActor, updateActor,deleteActor } = require('../database/actorsDB.JS');

const successMessages = {
    created: 'Actor added correctly',
    deleted: 'Actor deleted correctly',
    updated: 'Actor updated correctly'
}

const getResponse = ( message, success = true, data = null ) => {
    return { message, success, data};
}

const getAllActors = async (req = request, res = response) => {
    try {
        const actors = await getActors()
        res.status(200).json(getResponse(null, true, actors));    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
   }
const getActorsById = async (req = request, res = response) => {

    const { id } = req?.params;

    try {
        const actors = await getActorById(id)
        res.status(200).json(getResponse(null, true, actors));    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const postActors = async (req = request, res = response) => {
    const actors = req?.body;
    try {
        const createdActor = await createActor( actors );
        res.status(200).json( getResponse( successMessages.created, true, createdActor ));
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const updateActors = async (req = request, res = response) => {
    const actor = req?.body;
    const { id } = req?.params;

    try {
        await updateActor( id, actor );
        res.status(200).json( getResponse( successMessages.updated ))
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const deleteActors = async (req = request, res = response) => {
    const { id } = req?.params;

    try {
     await deleteActor( id );
      res.status(200).json( getResponse(successMessages.deleted ))
    } catch (error) {
     console.log('controller', error);
     res.status(400).json(getResponse( error.message, false ))
     }
}


module.exports = {
    getAllActors,
    getActorsById,
    postActors,
    updateActors,
    deleteActors,
    getResponse

}