var mysql = require('mysql');

function ModuleMysql() {
}
module.exports = ModuleMysql;

ModuleMysql.prototype.handle = function(structServer) {
    var jsonObj = {
        "module": "mismatch"
    };
    structServer.funcSuccess(structServer, jsonObj);
}

// var db = mysql.createConnection({
//     host : '127.0.0.1',
//     port: '3306',
//     user : 'teddy',
//     password : '199068',
//     database : 'ZHEditor'
// });
// db.connect();

// // mysql
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

// // mysql 增、删、改、查
// // 增 add
// var addSql = 'INSERT INTO ' + table +'(id,name,age) VALUES(0,?,?)';
// var addSql_Param = ['Wilson', 55];
// db.query(addSql, addSql_Param, function(err, result) {
//     if (err) {
//         console.log('[INSERT ERROR] - ', err.message);
//         return;
//     }       
//     console.log('-------INSERT----------');
//     //console.log('INSERT ID:', result.insertId);       
//     console.log('INSERT ID:', result);       
//     console.log('#######################'); 
// });
// //改 up
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
// //查 query
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
// // 删除 del
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

// db.end();