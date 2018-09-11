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

    server._mysql.query('SELECT *', function (err, result) {
        if (err)
            console.log("[Mysql]error : ", err.message);
        console.log("[Mysql]result : ", result);
    });
}
ModuleMysql.exit = function(server) {
    server._mysql.end();
}

ModuleMysql.prototype.handle = function(structServer) {
    var func = structServer._jsonClient.func;
    if (func === "add") {
        this.add(structServer);
    } else if (func === "del") {
        this.del(structServer);
    } else if (func === "up") {
        this.up(structServer);
    } else if (func === "query") {
        this.query(structServer);
    }
    // structServer._funcSuccess(structServer);
}
// sql
ModuleMysql.prototype.sql = function(structServer) {
    // structServer._server._mysql.query(structServer._jsonClient._sql, addSql_Param, function(err, result) {
    //     if (err) {
    //         console.log('[INSERT ERROR] - ', err.message);
    //         return;
    //     }       
    //     console.log('INSERT:', result);       
    // });

    // structServer._server._mysql.query()
}
// 增、删、改、查
ModuleMysql.prototype.add = function(structServer) {
    // var table = structServer._jsonClient.table;
    // var sql = 'INSERT INTO ' + table + '(id,name,age) VALUES(0,?,?)';


    // var addSql_Param = ['Wilson', 55];
    // structServer._server._mysql.query(sql, addSql_Param, function(err, result) {
    //     if (err) {
    //         console.log('[INSERT ERROR] - ', err.message);
    //         return;
    //     }       
    //     console.log('INSERT:', result);       
    // });
}
ModuleMysql.prototype.del = function(structServer) {
//     var sql = 'DELETE FROM ' + table + 'WHERE ' + key + '=' + value;


// db.query(userDelSql, function(err, result) {
//     if (err) {
//         console.log('[DELETE ERROR] - ', err.message);
//         return;
//     }       
//     console.log('-------------DELETE--------------');
//     console.log('DELETE affectedRows', result.affectedRows);
//     console.log('&&&&&&&&&&&&&&&&&'); 
// });
}
ModuleMysql.prototype.up = function(structServer) {
//     var sql = 'UPDATE node_user SET name = ?,age = ? WHERE id = ?';
// var userModSql_Params = ['Hello World',99,7];
// db.query(userModSql, userModSql_Params, function(err, result) {
//     if (err) {
//         console.log('[UPDATE ERROR] - ', err.message);
//         return;
//     }       
//     console.log('----------UPDATE-------------');
//     console.log('UPDATE affectedRows', result.affectedRows);
//     console.log('******************************');
// });
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
        structServer._funcSuccess(structServer);
    });
}