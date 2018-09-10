var mysql = require('mysql');

function ModuleMysql() {
}
module.exports = ModuleMysql;

ModuleMysql.init = function(server) {
    server._mysql = mysql.createConnection({
        host : '127.0.0.1',
        port: '3306',
        user : 'teddy',
        password : '199068',
        database : 'ZHEditor'
    });
    server._mysql.connect();
}
ModuleMysql.exit = function(server) {
    server._mysql.end();
}

ModuleMysql.prototype.handle = function(structServer) {
    var type = structServer._jsonClient.type;
    if (type === "add") {
        this.add(structServer);
    } else if (type === "del") {
        this.del(structServer);
    } else if (type === "up") {
        this.up(structServer);
    } else if (type === "query") {
        this.query(structServer);
    }
    structServer._funcSuccess(structServer);
}
// 增、删、改、查
ModuleMysql.prototype.add = function(structServer) {
    var table = structServer._jsonClient.table;
    var addSql = 'INSERT INTO ' + table +'(id,name,age) VALUES(0,?,?)';
    var addSql_Param = ['Wilson', 55];
    db.query(addSql, addSql_Param, function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }       
        console.log('INSERT ID:', result.insertId);       
        console.log('INSERT ID:', result);       
    });
}
ModuleMysql.prototype.del = function(structServer) {
// var userDelSql = 'DELETE FROM node_user WHERE id = 7';
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
// var userModSql = 'UPDATE node_user SET name = ?,age = ? WHERE id = ?';
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
// var userGetSql = 'SELECT * FROM node_user';
// db.query(userGetSql, function(err, result) {
//     if (err) {
//         console.log('[SELECT ERROR] - ', err.message);
//         return;
//     }       
//     console.log('---------------SELECT----------------');
//     console.log(result);       
//     console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'); 
// });
}

// db.query('select * from news', function(err, data) {
//     if (!err) {
//         // res.writeHead(200, {'Content-Type':'text/plain'});
//         // res.end('hello nodeJS 1');
//         res.write(JSON.stringify(data));
//         res.end();
//     }
// });

// var table = 'node_user';
// db.query( 
//     'SELECT * FROM ' + table, 
//     function selectCb(err, result, fields) { 
//         if (err) {
//             console.log('%s', err)
//             // throw err;
//         } 
//         if (result) {
//             for (var i = 0; i < result.length; i++) {
//                 console.log("%d\t%s\t%s", result[i].id, result[i].name, result[i].age);
//             }
//         }   
//     } 
// );