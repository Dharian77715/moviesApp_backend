const { response, request } = require('express');
const { uploadFile } = require('../helpers/upload-file');
const executeQuery = require("../database/connectionDB");
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2

cloudinary.config( process.env.CLOUDINARY_URL );


const postFile = async (req = request, res = response) => {

  const { id, collection } = req.params;
    
  try {

    const imgName = await uploadFile(req.files, undefined, collection);
    const insertedImg = `INSERT INTO ${collection} (img) VALUES (?);`
    const results = await executeQuery(insertedImg, [imgName] );
    res.json(results);

  } catch (error) {
    res.status(400).json({ error: `Error posting the img. ${error.message}` });
  }
}


const updateFile = async (req, res = response) => {

  const { id, collection } = req.params;

  try {

    const imgName = await uploadFile(req.files, undefined, collection);
    const insertedImg = `UPDATE ${collection} SET img = IFNULL(?, img)  WHERE id=${id};`
    const results = await executeQuery(insertedImg, [imgName] );
    res.json(results);

  } catch (error) {
    res.status(400).json({ error: `Error updating the img. ${error.message}` });
  }
};


const updateFileCloudinary = async (req, res = response) => {

  const { id, collection } = req.params;

  try {
 
    const imgQuery = `SELECT img FROM ${collection} WHERE id=${id}`;
    const previousImg = await executeQuery(imgQuery);

    // Delete previous imgs
    if ( previousImg[0].img ) {
      const imgName = previousImg[0].img.split('/');
      const name    = imgName[ imgName.length - 1];
      const [ cloudinaryImg ]     = name.split('.');
      console.log(cloudinaryImg)
      cloudinary.uploader.destroy( cloudinaryImg );
    };

    const { tempFilePath } = req.files.file
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
    
    const insertedImg = `UPDATE ${collection} SET img = IFNULL(?, img)  WHERE id=${id};`
    const results = await executeQuery(insertedImg, [secure_url] );

    res.json( results );
    
  } catch (error) {
    res.status(400).json({ error: `Error updating the img. ${error.message}` });
  }
};


const getFile = async (req, res = response) => {

  const { id, collection } = req.params;

   try {

    const imgQuery = `SELECT img FROM ${collection} WHERE id=${id}`;
    const file = await executeQuery(imgQuery);

    if ( file[0].img && file[0].img.length > 0 ) {
      const pathImagen = path.join( __dirname, '../uploads', collection, file[0].img );
      if ( fs.existsSync( pathImagen ) ) {
          return res.sendFile( pathImagen )
      }
  }
    
   } catch (error) {
    res.status(400).json({ error: `Error getting the img. ${error.message}` });
   }

    const imagePath = path.join( __dirname, '../assets/no-image.jpg');
    res.sendFile( imagePath );
}



module.exports = {
    postFile,
    updateFile,
    getFile,
    updateFileCloudinary
}