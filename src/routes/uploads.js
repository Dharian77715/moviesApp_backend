const { Router } = require('express');
const { postFile, updateFile } = require('../controllers/uploads')


const router = Router();

router.post('/',   postFile);

router.put('/:actors:movies', updateFile);

module.exports = router;