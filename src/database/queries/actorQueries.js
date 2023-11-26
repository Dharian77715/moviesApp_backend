const actorQueries = {
    select: {
      byId: `SELECT actor_id,name,date_of_birth,sex FROM actors WHERE actor_id=?`,
      all: `SELECT actor_id,name,date_of_birth,sex FROM actors;
          `,
    },
    insert: `INSERT INTO actors (name,date_of_birth,sex) VALUES (?, ?, ?);`,
    update: `UPDATE actors SET name = IFNULL(?, name), date_of_birth = IFNULL(?, date_of_birth), sex = IFNULL(?, sex) WHERE actor_id=?;`,
    delete: `DELETE FROM actors WHERE actor_id=?`,
  };
  
  module.exports = actorQueries;