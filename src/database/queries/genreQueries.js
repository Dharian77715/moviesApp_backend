
const genreQueries = {
    select: {
      byId: `SELECT id, genre FROM genres WHERE id=?`,
      all: `SELECT id,genre FROM genres;`,
      genresByMovieId: `SELECT  g.id, g.genre FROM movies_genres mg  inner join genres g on g.id= mg.genres_id where mg.movies_id=?;`
    },
    insert: `INSERT INTO movies_genres (movies_id, genres_id) VALUES (?, ?);`,
    update: `UPDATE genres SET genre = IFNULL(?, genre) WHERE id=?;`,
    delete: `DELETE FROM movies_genres WHERE movies_id = ?`,
  };
  
  module.exports = genreQueries;