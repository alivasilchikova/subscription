var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

//Подключаем middleware для того, что бы в req добавилось body
app.use(express.urlencoded());
//Обрабатываем наш запрос
app.post('/', function (req, res) {
    res.end('Наш ответ клиенту')
});

