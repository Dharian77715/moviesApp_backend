const { Router } = require('express');
const { getAllGenres, getGenresById, postGenres, deleteGenres, updateGenres, getGenresByMoviesId } = require('../controllers/genres');




const router = Router();

router.get('/', getAllGenres);
router.get('/:id', getGenresById);
router.get('/moviegenres/:movieId', getGenresByMoviesId);
router.post('/moviegenres', postGenres);
router.put('/moviegenres/:id', updateGenres);
router.delete('/:id', deleteGenres);

module.exports = router;
