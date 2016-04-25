#!/bin/env node

module.exports = function (server) {

    var io = require('socket.io').listen(server);

    var DivanumCore = require('../DivanumCore.js');
    var divanumCore = new DivanumCore();
    var Perfil = require('../Perfil.js');

    // rooms which are currently available in chat
    //var rooms = [];
    var usernames = {};
    var contadorMsg = 0;
    var msgUser1 = {
        username: '',
        msgs: []
    };
    var msgUser2 = {
        username: '',
        msgs: []
    };

    io.sockets.on('connection', function (socket) {

        // when the client emits 'adduser', this listens and executes
        socket.on('adduser', function (codeRoom, username) {
            // store the username in the socket session for this client
            socket.username = username;
            // store the room name in the socket session for this client
            socket.room = codeRoom;
            // add the client's username to the global list
            usernames[username] = username;
            // send client to room 1
            socket.join(codeRoom);
            // echo to client they've connected
            //socket.emit('updatechat', 'SERVER', 'you have connected to room1');
            // echo to room 1 that a person has connected to their room
            //socket.broadcast.to(codeRoom).emit('updatechat', 'SERVER', username + ' has connected to this room');
            //socket.emit('updaterooms', rooms, 'room1');
        });

        // when the client emits 'sendchat', this listens and executes
        socket.on('sendchat', function (username, data) {
            // we tell the client to execute 'updatechat' with 2 parameters
            if (msgUser1.username == '') {
                msgUser1.username = username;
                msgUser1.msgs.push(data);
                console.log('1');
            } else if (msgUser2.username == '') {
                msgUser2.username == username;
                msgUser2.msgs.push(data);
                console.log('2');
            } else if (msgUser1.username == username) {
                msgUser1.msgs.push(data);
            } else {
                msgUser2.msgs.push(data);
            }

            contadorMsg++;
            if (contadorMsg >= 10) {
                var textoTratado1 = '';
                var textoTratado2 = '';
                var perfil1 = new Perfil();
                var perfil2 = new Perfil();

                for (var i = 0; i < msgUser1.msgs.length; i++) {
                    textoTratado1 += msgUser1.msgs[i] + '.';
                }
                for (var i = 0; i < msgUser2.msgs.length; i++) {
                    textoTratado2 += msgUser2.msgs[i] + '.';

                }
                divanumCore.textToPerfil(textoTratado1, function (perfil) {
                    if (username == msgUser1.username) {
                        console.log('####################');
                        perfil1 = perfil;
                        perfil1.setIdUsuario(username);
                        //console.log(perfil1);
                        
                        var stringJson = JSON.stringify(perfil1);
                        var parseJson = JSON.parse(stringJson);
                        var collection = conexao.collection('perfil');
                        collection.insert(
                            parseJson, {
                                w: 1
                            },
                            function (err, result) {
                                console.log('####################');
                                console.log(err);
                            });

                    } else {
                        console.log('####################');
                        perfil2 = perfil;
                        perfil2.setIdUsuario(username);
                        //console.log(perfil2);
                        var stringJson = JSON.stringify(perfil2)
                        var parseJson = JSON.parse(stringJson);
                        var collection = conexao.collection('perfil');
                        collection.insert(
                            parseJson, {
                                w: 1
                            },
                            function (err, result) {
                                console.log('####################');
                                console.log(err);
                            });
                    }
                    perfil1 = perfil;
                    divanumCore.textToPerfil(textoTratado2, function (perfil) {
                        perfil2 = perfil;
                        divanumCore.validaPerfis(perfil1, perfil2, function (match) {
                            if (match) {
                                io.sockets.in(socket.room).emit('deuMatch');

                                var collection = conexao.collection('perfis');

                            } else {
                                io.sockets.in(socket.room).emit('naoDeuMatch');
                            }
                        });
                    });
                });
                contadorMsg = 0;
            }

            io.sockets.in(socket.room).emit('updatechat', socket.username, data);

        });

        //        socket.on('switchRoom', function (newroom) {
        //            // leave the current room (stored in session)
        //            socket.leave(socket.room);
        //            // join new room, received as function parameter
        //            socket.join(newroom);
        //            socket.emit('updatechat', 'SERVER', 'you have connected to ' + newroom);
        //            // sent message to OLD room
        //            socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username + ' has left this room');
        //            // update socket session room title
        //            socket.room = newroom;
        //            socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username + ' has joined this room');
        //            socket.emit('updaterooms', rooms, newroom);
        //        });

        // when the user disconnects.. perform this
        socket.on('disconnect', function () {
            // remove the username from global usernames list
            delete usernames[socket.username];
            // update list of users in chat, client-side
            //io.sockets.emit('updateusers', usernames);
            // echo globally that this client has left
            //socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
            socket.leave(socket.room);
        });
    });
};