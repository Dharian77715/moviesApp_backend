const { Router } = require('express');
const { getAllActors, getActorsById, postActors, updateActors, deleteActors } = require('../controllers/actors');
const { validateActorsName } = require('../middlewares/generalValidations');


const router = Router();

router.get('/', getAllActors);
router.get('/:id', getActorsById);
router.post('/',  validateActorsName, postActors);
router.put('/:id', updateActors);
router.delete('/:id', deleteActors);

module.exports = router;