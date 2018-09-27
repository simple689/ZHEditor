const APIServer = require('../API/APIServer.js');
const APIData = require('../API/APIData.js');

var mysql = require('mysql');

module.exports = ModuleMysql;

function ModuleMysql() {
}
ModuleMysql._db = null;

ModuleMysql.init = function(server) {
    try {
        var conf = server._conf;
        ModuleMysql._db = mysql.createConnection({
            host : '127.0.0.1',
            port: '3306',
            user : 'teddy',
            password : '199068',
            database : conf._mysql._db
        });
        ModuleMysql._db.connect(function(e) {
            if (e) {
                ModuleMysql._db = null;
                console.log("[Mysql]error : ", e);
            }
        });
        // ModuleMysql._db.query('SELECT *', function (err, result) {
        //     if (err)
        //         console.log("[Mysql]error : ", err.message);
        //     console.log("[Mysql]result : ", result);
        // });
    } catch(e) {
        console.log("[Mysql]error : ", e);
    }
}
ModuleMysql.exit = function(server) {
    ModuleMysql._db.end();
}

ModuleMysql.prototype.handle = function(structServer) {
    var func = structServer._jsonClient[APIData._func];
    if (func === APIServer._mysql._add) {
        this.add(structServer);
    } else if (func === APIServer._mysql._del) {
        this.del(structServer);
    } else if (func === APIServer._mysql._up) {
        this.up(structServer);
    } else if (func === APIServer._mysql._query) {
        this.query(structServer);
    }
    // structServer._funcComplete(structServer);
}
// 增、删、改、查
ModuleMysql.prototype.add = function(structServer) {
    var sql = 'INSERT INTO ' + structServer._jsonClient.table + '(id,name,age) VALUES(0,?,?)';
    console.log("[Mysql]add : ", sql);
    var sqlParam = ['Wilson', 55];
    ModuleMysql._db.query(sql, sqlParam, function(err, result) {
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
    ModuleMysql._db.query(sql, function(err, result) {
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
    ModuleMysql._db.query(sql, sqlParam, function(err, result) {
        if (err) {
            console.log("[Mysql]error : ", err.message);
            return;
        }       
        console.log("[Mysql]result : ", result);
    });
}
ModuleMysql.prototype.query = function(structServer) {
    var sql = 'SELECT * FROM ' + structServer._jsonClient.table;
    ModuleMysql.querySql(sql);
}
ModuleMysql.querySql = function(sql, structServer) {
    console.log("[Mysql]query : ", sql);
    ModuleMysql._db.query(sql, function(err, result) {
        if (err) {
            console.log("[Mysql]error : ", err.message);
        }
        console.log("[Mysql]result : ", result);
        if (structServer && structServer._funcComplete) {
            structServer._funcComplete(err, result, structServer);
        }
    });
}