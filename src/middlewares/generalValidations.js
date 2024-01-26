const { response, request } = require('express');
const { getResponse } = require('../controllers/actors');
const executeQuery = require("../database/connectionDB");
const fs = require('fs');
const path = require('path');

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

const allowedCollections = ( req, res, next ) => {

    const allowed = ['movies', 'actors'];
    const collection = req.params.collection;
  
    if (!allowed.includes(collection)) {
      return res.status(400).json({ error: `The collection ${collection} is not allowed` });
    }
  
    req.allowedCollection = collection;
  
    next();
}

const validateFileUpload = (req = request, res = response, next) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        res.status(400).json({ msg: 'No files were uploaded.' });
        return;
      }

      next();
}

const deletePreviousImg = async (req = request, res = response, next) => {

    const { id, collection } = req.params;

    try {
     const imgQuery = `SELECT img FROM ${collection} WHERE id=${id}`;
     const previousImg = await executeQuery(imgQuery);

    //Delete previous img
    if ( previousImg[0].img && previousImg[0].img.length > 0 ) {
      const previousImgPath = path.join( __dirname, '../uploads/', collection, previousImg[0].img );
      if ( fs.existsSync( previousImgPath ) ) {
          fs.unlinkSync( previousImgPath );
      }
    }
    } catch (error) {
        res.status(400).json({ error: `Error deleting the img. ${error.message}` });
    }
    next();
}




module.exports = {
    validateActorsName,
    validateMovieTitle,
    allowedCollections,
    validateFileUpload,
    deletePreviousImg
}

