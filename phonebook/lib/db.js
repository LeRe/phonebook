const config = require('./lib/config');


//Подключаемся к базе данных
var connection = mysql.createConnection({
    host: config.serverAddr,
    user: config.dbUser,
    password: config.password,
    database: config.dbName
});

//получаем все записи из таблицы phonelist
function allPhones() {
    connection.connect();
    let query = 'SELECT id, fioname, jobname, title, location, workphone, dect, mobile, email, department, photopath FROM phonelist';

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });

    connection.end();
}
