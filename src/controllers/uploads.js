const { response, request } = require('express');
const { uploadFile } = require('../helpers/upload-file');



const postFile = async (req = request, res = response) => {
  
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
      res.status(400).json({msg: 'No files were uploaded.'});
      return;
    }
    
  try {
      // Imgs
   const name = await uploadFile(req.files, undefined, 'imgs')
   res.json({ name });
  } catch (msg) {
    res.status(400).json({ msg });
  }
}


const updateFile = async (req, res = response) => {
    
    const { actors, movies } = req.params;

    res.json({ actors, movies });

    const name = await uploadFile(req.files, undefined, 'imgs')
}


module.exports = {
    postFile,
    updateFile
}