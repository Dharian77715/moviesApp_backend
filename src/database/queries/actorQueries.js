const actorQueries = {
    select: {
      byId: `SELECT id,name,date_of_birth, img FROM actors WHERE id=?`,
      all: `SELECT id,name,date_of_birth, img FROM actors;
          `,
    },
    insert: `INSERT INTO actors (name,date_of_birth, img) VALUES (?, ?, ?);`,
    update: `UPDATE actors SET name = IFNULL(?, name), date_of_birth = IFNULL(?, date_of_birth), img = IFNULL(?, img) WHERE id=?;`,
    delete: `DELETE FROM actors WHERE id=?`,
  };
  
  module.exports = actorQueries;