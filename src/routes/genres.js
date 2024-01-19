const { Router } = require('express');
const { getAllGenres, getGenresById, postGenres, deleteGenres, updateGenres } = require('../controllers/genres');




const router = Router();

router.get('/', getAllGenres);
router.get('/:id', getGenresById);
router.post('/', postGenres);
router.put('/:id', updateGenres);
router.delete('/:id', deleteGenres);

module.exports = router;