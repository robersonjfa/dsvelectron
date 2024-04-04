const db = require("../config/db");

class UsuarioController {
  async getUsuarios() {
    let results = 
    await db.query(`SELECT codusu, logusu FROM usuario`).
    catch(console.log);
    return results.rows;
  }

  async validaLogin(login, senha) {
    let results = 
    await db.query(`SELECT codusu, logusu FROM usuario
    where logusu = $1 and senusu = $2`, [ login, senha ]).
    catch(console.log);
    return results.rows;
  }
}

module.exports = UsuarioController;