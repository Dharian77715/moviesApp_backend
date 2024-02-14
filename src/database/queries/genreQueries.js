
const genreQueries = {
    select: {
      byId: `SELECT id, genre FROM genres WHERE id=?`,
      all: `SELECT id,genre FROM genres;`,
      genresByMovieId: `SELECT  g.id, g.genre, mg.active  FROM movies_genres mg  inner join genres g on g.id= mg.genres_id where mg.movies_id=?;`,
      moviesGenres: `SELECT  movies_id, genres_id FROM movies_genres  WHERE movies_id=? AND genres_id=?;`
    },
    insert: `INSERT INTO movies_genres (movies_id, genres_id) VALUES (?, ?);`,
    // updateMoviesGenres: `UPDATE movies_genres SET movies_id = IFNULL(?, movies_id), genres_id = IFNULL(?, genres_id), active = IFNULL(?, active)  WHERE movies_id=? AND genres_id=?;`,
    updateMoviesGenres: `UPDATE movies_genres SET  active = ?  WHERE movies_id=? AND genres_id=?;`,
    delete: `DELETE FROM movies_genres WHERE movies_id = ?`,
  };
  
  module.exports = genreQueries;