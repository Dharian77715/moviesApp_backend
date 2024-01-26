const { Router } = require('express');
const { postFile, updateFile, getFile, updateFileCloudinary } = require('../controllers/uploads');
const { allowedCollections, validateFileUpload, deletePreviousImg } = require('../middlewares/generalValidations');

const router = Router();

router.post('/:collection/:id', [allowedCollections, validateFileUpload], postFile);

router.put('/:collection/:id', [allowedCollections, validateFileUpload, deletePreviousImg], 
// updateFileCloudinary)
updateFile);

router.get('/:collection/:id', allowedCollections, getFile);


module.exports = router;