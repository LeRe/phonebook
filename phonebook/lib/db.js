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
        callback(null, JSON.stringify(results))
    });
    
    //connection.end();
}

function getPerson(id, callback) {
    let query = 'SELECT fioname, jobname, title, location, workphone, dect, mobile, email, department, photopath FROM phonelist WHERE id=' + id;

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        callback(null, JSON.stringify(results[0]));
    });
} 

exports.getAllPersons = getAllPersons;
exports.getPerson = getPerson;