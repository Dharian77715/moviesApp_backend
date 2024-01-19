const { Router } = require('express');
const { getAllSexs, getSexsById, postSex, updateSexs, deleteSexs } = require('../controllers/sex');



const router = Router();

router.get('/', getAllSexs);
router.get('/:id', getSexsById);
router.post('/',  postSex);
router.put('/:id', updateSexs);
router.delete('/:id', deleteSexs);

module.exports = router;