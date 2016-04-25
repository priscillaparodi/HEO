#!/bin/env node

function Perguntas() {
    this._connection = dbConn;
}

Perguntas.prototype.getAllPerguntas = function (done) {
    this._connection.collection('perguntas').find().toArray(function (err, results) {
        if (err) {
            done(err, 'Houve um erro no retorno das perguntas');
        } else {
            done(null, results);
        }
    });
}

Perguntas.prototype.getPerguntaById = function (perguntaId, done) {
    this._connection.collection('perguntas').find({
        "_id": perguntaId
    }).each(function (err, results) {
        if (err) {
            done(err, 'Houve um erro no retorno das perguntas');
        } else if (results.length == 0) {
            done(null, 'Pergunta não localizada');
        } else {
            done(null, results);
        }
    });
}

Perguntas.prototype.insertPergunta = function (pergunta, done) {
    this._connection.collection('perguntas').insertOne(pergunta, function (err, results) {
        if (err) {
            done(err, 'Houve um erro na inclusão da pergunta.');
        } else {
            done(null, 'Pergunta incluída com sucesso!');
        }
    });
}

Perguntas.prototype.updatePergunta = function (perguntaId, perguntaUpdate, done) {
    this._connection.collection('perguntas').updateOne({
        "_id": perguntaId
    }, {
        $set: {
            "conteudoPergunta": perguntaUpdate.conteudoPergunta,
            "autorPergunta": perguntaUpdate.autorPergunta,
            "dataPergunta": perguntaUpdate.dataPergunta,
            "opcoesPergunta": perguntaUpdate.opcoesPergunta,
        }
    }, function (err, results) {
        if (err) {
            done(err, 'Houve um erro na atualização da pergunta.');
        } else {
            done(null, 'Pergunta atualizada com sucesso!');
        }
    });
}

Perguntas.prototype.deletePergunta = function (perguntaId, done) {
    this._connection.collection('perguntas').remove({
        "_id": perguntaId
    }, function (err, results) {
        if (err) {
            done(err, 'Houve um erro na exclusão da pergunta.');
        } else {
            done(null, 'Pergunta excluída com sucesso!');
        }
    });
}

module.exports = Perguntas;