const movieQueries = {
    select: {
      byId: `SELECT id,title,release_date, img, country, duration, director, cast FROM movies WHERE id=?;
          `,
      all: `SELECT id,title,release_date, img, country, duration, director, cast FROM movies;
          `,
    },
    insert: `INSERT INTO movies (title,release_date, country, duration, director, cast) VALUES (?, ?, ?, ?, ?, ?);`,
    update: `UPDATE movies SET title = IFNULL(?, title), release_date = IFNULL(?, release_date), country = IFNULL(?, country), duration = IFNULL(?, duration), director = IFNULL(?, director), cast = IFNULL(?, cast)  WHERE id=?`,
    delete: `DELETE FROM movies WHERE id=?`,
  };
  
  module.exports = movieQueries;