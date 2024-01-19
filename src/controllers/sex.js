const { response, request } = require('express');
const { getSexById, getSex, createSex, updateSex, deleteSex } = require('../database/sexDB.JS');


const successMessages = {
    created: 'Sex added correctly',
    deleted: 'Sex deleted correctly',
    updated: 'Sex updated correctly'
}

const getResponse = ( message, success = true, data = null ) => {
    return { message, success, data};
}

const getAllSexs = async (req = request, res = response) => {
    try {
        const sex = await getSex()
        res.status(200).json( sex);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const getSexsById = async (req = request, res = response) => {
   
    const { id } = req?.params;

    try {
        const sex = await getSexById(id)
        res.status(200).json(sex);    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const postSex = async (req = request, res = response) => {
    
    const sex = req?.body;
    try {
        const createdSex = await createSex( sex );
        res.status(200).json( getResponse( successMessages.created, true, createdSex ));
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const updateSexs = async (req = request, res = response) => {
   
    const sex = req?.body;
    const { id } = req?.params;

    try {
        await updateSex( id, sex );
        res.status(200).json( getResponse( successMessages.updated ))
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }
}
const deleteSexs =  async (req = request, res = response) => {
   
    const { id } = req?.params;

    try {
     await deleteSex( id );
      res.status(200).json( getResponse(successMessages.deleted ))
    } catch (error) {
     console.log('controller', error);
     res.status(400).json(getResponse( error.message, false ))
     }
}


module.exports = {
getAllSexs,
getSexsById,
postSex,
updateSexs,
deleteSexs
}