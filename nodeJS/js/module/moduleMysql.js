var mysql = require('mysql');

module.exports = ModuleMysql;

function ModuleMysql() {
}

ModuleMysql.init = function(server) {
    server._mysql = mysql.createConnection({
        host : '127.0.0.1',
        port: '3306',
        user : 'teddy',
        password : '199068',
        database : 'ZHEditor'
    });
    server._mysql.connect();

    // server._mysql.query('SELECT *', function (err, result) {
    //     if (err)
    //         console.log("[Mysql]error : ", err.message);
    //     console.log("[Mysql]result : ", result);
    // });
}
ModuleMysql.exit = function(server) {
    server._mysql.end();
}

ModuleMysql.prototype.handle = function(structServer) {
    var func = structServer._jsonClient[APIKey._func];
    if (func === "add") {
        this.add(structServer);
    } else if (func === "del") {
        this.del(structServer);
    } else if (func === "up") {
        this.up(structServer);
    } else if (func === "query") {
        this.query(structServer);
    }
    // structServer._funcComplete(structServer);
}
// 增、删、改、查
ModuleMysql.prototype.add = function(structServer) {
    var sql = 'INSERT INTO ' + structServer._jsonClient.table + '(id,name,age) VALUES(0,?,?)';
    console.log("[Mysql]add : ", sql);
    var sqlParam = ['Wilson', 55];
    structServer._server._mysql.query(sql, sqlParam, function(err, result) {
        if (err) {
            console.log("[Mysql]error : ", err.message);
            return;
        }       
        console.log("[Mysql]result : ", result);
    });
}
ModuleMysql.prototype.del = function(structServer) {
    var sql = 'DELETE FROM ' + structServer._jsonClient.table + 'WHERE ' + key + '=' + value;
    console.log("[Mysql]del : ", sql);
    structServer._server._mysql.query(sql, function(err, result) {
        if (err) {
            console.log("[Mysql]error : ", err.message);
            return;
        }       
        console.log("[Mysql]result : ", result);
    });
}
ModuleMysql.prototype.up = function(structServer) {
    var sql = 'UPDATE ' + structServer._jsonClient.table + 'SET name = ?,age = ? WHERE id = ?';
    console.log("[Mysql]add : ", sql);
    var sqlParam = ['Hello World',99,7];
    structServer._server._mysql.query(sql, sqlParam, function(err, result) {
        if (err) {
            console.log("[Mysql]error : ", err.message);
            return;
        }       
        console.log("[Mysql]result : ", result);
    });
}
ModuleMysql.prototype.query = function(structServer) {
    var sql = 'SELECT * FROM ' + structServer._jsonClient.table;
    console.log("[Mysql]query : ", sql);
    structServer._server._mysql.query(sql, function(err, result) {
        if (err) {
            console.log("[Mysql]error : ", err.message);
            return;
        }
        console.log("[Mysql]result : ", result);
        structServer._funcComplete(structServer);
    });
}