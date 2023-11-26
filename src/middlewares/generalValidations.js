const { response, request } = require('express');
const { getResponse } = require('../controllers/actors');
const executeQuery = require("../database/connectionDB");

const validateActorsName = async (req = request, res = response, next) => {

    const { name } = req.body;

    try {
        const actorsName = 'SELECT * FROM actors WHERE name = ?'
        const results = await executeQuery(actorsName, [name]);
    
        if (results.length > 0) {
            res.status(409).json(`The actor ${ name } already exists in the DB`);
            return;
        } 
    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }

    next();
}

const validateMovieTitle = async (req = request, res = response, next) => {

    const { title } = req.body;

    try {
        const movieTitle = 'SELECT * FROM movies WHERE title = ?'
        const results = await executeQuery(movieTitle, [title]);
    
        if (results.length > 0) {
            res.status(409).json(`The title ${ title } already exists in the DB`);
            return;
        } 
    
    } catch (error) {
        console.log('controller', error);
        res.status(400).json(getResponse( error.message, false ))
    }

    next();
}

module.exports = {
    validateActorsName,
    validateMovieTitle
}

