const genreQueries = {
    select: {
      byId: `SELECT id, genre FROM genres WHERE id=?`,
      all: `SELECT id,genre FROM genres;
          `,
    },
    insert: `INSERT INTO genres (genre) VALUES (?);`,
    update: `UPDATE genres SET genre = IFNULL(?, genre) WHERE id=?;`,
    delete: `DELETE FROM genres WHERE id=?`,
  };
  
  module.exports = genreQueries;