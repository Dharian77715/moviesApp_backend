const sexQueries = {
    select: {
      byId: `SELECT id, sex_name FROM sex WHERE id=?`,
      all: `SELECT id, sex_name FROM sex;`,
    },
    insert: `INSERT INTO sex (sex_name) VALUES (?);`,
    update: `UPDATE actors SET sex_id = IFNULL(?, sex_name) WHERE id=?;`,
    delete: `DELETE FROM sex WHERE id=?`,
  };
  
  module.exports = sexQueries;