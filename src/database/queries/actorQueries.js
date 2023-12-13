const actorQueries = {
    select: {
      byId: `SELECT id,name,date_of_birth,sex, img FROM actors WHERE id=?`,
      all: `SELECT id,name,date_of_birth,sex, img FROM actors;
          `,
    },
    insert: `INSERT INTO actors (name,date_of_birth,sex, img) VALUES (?, ?, ?, ?);`,
    update: `UPDATE actors SET name = IFNULL(?, name), date_of_birth = IFNULL(?, date_of_birth), sex = IFNULL(?, sex), img = IFNULL(?, img) WHERE id=?;`,
    delete: `DELETE FROM actors WHERE id=?`,
  };
  
  module.exports = actorQueries;