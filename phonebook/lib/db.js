const config = require('./config');
const mysql = require('mysql');

//Подключаемся к базе данных
var connection = mysql.createConnection({
    host: config.serverAddr,
    user: config.dbUser,
    password: config.password,
    database: config.dbName
});

connection.connect();

//получаем все записи из таблицы phonelist
function getAllPersons(callback) {
    
    //let query = 'SELECT id, fioname, jobname, title, location, workphone, dect, mobile, email, department, photopath FROM phonelist';
    let query = 'SELECT id, fioname, jobname, title, location, workphone, dect, mobile, email, department FROM phonelist';
    
    connection.query(query, function (error, results, fields) {
        if (error) throw error;

        let req = callback.req;
        let res = callback.res;
        res.send(JSON.stringify(results));
        
    });
    
    //connection.end();
}

exports.getAllPersons = getAllPersons;