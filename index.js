var app = require('express')();
var fs = require('fs');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 8080;

app.get('/', function (req, res) {
    return res.sendFile(__dirname + '\\views\\index.html');
});

io.on('connection', function(socket){
    console.log('Someone connected!');

    socket.on('disconnect', function() {
        console.log('O plecat cineva!');
    });

    socket.on('chat message', function(msg){
        console.log(`message:${msg}`);
        io.emit('chat message', msg);
    });

});

http.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}!`));