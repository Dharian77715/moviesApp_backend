const movieQueries = {
    select: {
      byId: `SELECT id,title,release_date, img FROM movies WHERE id=?;
          `,
      all: `SELECT id,title,release_date, img FROM movies;
          `,
    },
    insert: `INSERT INTO movies (title,release_date, img) VALUES (?, ?, ?);`,
    update: `UPDATE movies SET title = IFNULL(?, title), release_date = IFNULL(?, release_date), img = IFNULL(?, img)  WHERE id=?;`,
    delete: `DELETE FROM movies WHERE id=?`,
  };
  
  module.exports = movieQueries;