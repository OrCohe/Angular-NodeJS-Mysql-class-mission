const mysql = require('mysql');

module.exports = class dataBase {
    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: "localhost",
            user: "root",
            password: "12345",
            database: "Mission"
          });
        this.pool.on("acquire", connection => console.log(`Pool ID: ${connection.threadId}`));
        this.pool.query(`CREATE TABLE person (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), nickname VARCHAR(255), role VARCHAR(255))`);
        this.pool.query(`CREATE TABLE task (id INT AUTO_INCREMENT PRIMARY KEY, description VARCHAR(255), date VARCHAR(255), personId INT)`);
    }

    getMembers(callBack) {
        this.pool.query(`SELECT * FROM person`,(err, result, fields) => {
            if (err) return callBack({status: false, data: err});
            return callBack({status: true, data: result});
          });
    }

    getTasks(callBack) {
        this.pool.query(`SELECT task.id, description, date, person.name FROM task LEFT JOIN person ON task.personId = person.id`,(err, result, fields) => {
            if (err) return callBack({status: false, data: err});
            return callBack({status: true, data: result});
          });
    }

    addMember(name, nickname, role, callBack) {
        this.pool.query(`INSERT INTO person (name, nickname, role) VALUES (?, ?, ?)`, [name, nickname, role] ,(err, result, fields) => {
            if (err) return callBack({status: false, data: err});
            return callBack({status: true, data: result});
          });
    }

    addTask(description, date, personId, callBack) {
        this.pool.query(`INSERT INTO task (description, date, personId) VALUES (?, ?, ?)`, [description, date, personId] ,(err, result, fields) => {
            if (err) return callBack({status: false, data: err});
            return callBack({status: true, data: result});
          });
    }

    deleteMember(id, callBack) {
        this.pool.query(`DELETE FROM person WHERE id = ?`, [id] , (err, result) => {
          this.pool.query(`DELETE FROM task WHERE personId = ?`,[id]);  
          if (err) return callBack({status: false, data: err});
          return callBack({status: true, data: result});
        });
    }

    deleteTask(id, callBack) {
        this.pool.query(`DELETE FROM task WHERE id = ?`, [id] , (err, result) => {
          if (err) return callBack({status: false, data: err});
          return callBack({status: true, data: result});
        });
    }
}