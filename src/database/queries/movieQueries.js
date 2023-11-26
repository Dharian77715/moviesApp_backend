const movieQueries = {
    select: {
      byId: `SELECT movie_id,title,gender,release_date FROM movies WHERE movie_id=?;
          `,
      all: `SELECT movie_id,title,gender,release_date FROM movies;
          `,
    },
    insert: `INSERT INTO movies (title,gender,release_date) VALUES (?, ?, ?);`,
    update: `UPDATE movies SET title = IFNULL(?, title), gender= IFNULL(?, gender), release_date = IFNULL(?, release_date) WHERE movie_id=?;`,
    delete: `DELETE FROM movies WHERE movie_id=?`,
  };
  
  module.exports = movieQueries;