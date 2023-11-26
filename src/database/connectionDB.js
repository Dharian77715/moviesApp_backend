const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');

const pool = mysql.createPool(dbConfig);

const executeQuery = async (query, values = []) => {
    try {
      const [result] = await pool.query(query, values);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
 
  
  

 module.exports = executeQuery;
