const { Router } = require('express');
const { getAllMovies, getMoviesById, postMovies, updateMovies, deleteMovies } = require('../controllers/movies');
const { validateMovieTitle } = require('../middlewares/generalValidations');

const router = Router();

router.get('/', getAllMovies);
router.get('/:id', getMoviesById);
router.post('/', validateMovieTitle, postMovies);
router.put('/:id', updateMovies);
router.delete('/:id', deleteMovies);

module.exports = router;