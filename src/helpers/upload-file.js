const path = require('path');
const { v4: uuidv4 } = require('uuid');


const uploadFile = ( files, validExtensions = ['jpg', 'png', 'jpeg', 'gif' ], folder = '' ) => {

    return new Promise( (resolve, reject) => {

        const { file }  = files;
        const splitName = file.name.split('.');
        const extension = splitName[ splitName.length - 1 ];
       
     
        //Validate extensions
        if ( !validExtensions.includes(extension) ) {
         return reject(`The extension ${extension} is not a valid extension, ${validExtensions}`);
        }
       
         const tempName = uuidv4() + '.' + extension;
         const uploadPath = path.join( __dirname, '../uploads/', folder, tempName);
       
         file.mv(uploadPath, (err) => {
           if (err) {
             reject({err});
           }
       
           resolve( tempName );
         });
    });

   

};


module.exports = {
    uploadFile
}