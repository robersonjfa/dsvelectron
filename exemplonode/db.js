const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', host: 'localhost', 
database: 'postgres', password: 'postgres', 
port: 5432,
})
const getTabelas = (request, response) => {
   pool.query('SELECT * FROM pg_tables', (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
 }
 module.exports = {
   getTabelas
 }
