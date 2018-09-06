var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'teddy',
    password: '199068',
    database: 'ZHEditor'
});

var httpObj = http.createServer(function(req, res) {
    console.log('req.url : ' + req.url); // 日志文件
    if (req.url.indexOf('getNews') != 1) {
        // 从数据库拿数据
        console.log('进来了！');
        db.query('select * from news', function(err, data) {
            if (!err) {
                // res.writeHead(200, {'Content-Type':'text/plain'});
                // res.end('hello nodeJS 1');
                res.write(JSON.stringify(data));
                res.end();
            }
        });
    } else {
        fs.readFile('www' + req.url, function(err, data) {
            console.log('www' + req.url);
            if (!err) {
                res.write(data);
                res.end();
            } else {
                res.write('404');
                res.end();
            }
        });
    }
});

httpObj.listen(6989, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:6989');
})



