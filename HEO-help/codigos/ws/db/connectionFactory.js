#!/bin/env node

module.exports = function () {
    // conectar com o BD
	require('mongodb').MongoClient.connect("mongodb://essemesmo:essemesmo12@ds011271.mlab.com:11271/divanum", function (err, db) {
        if (err) {
            console.log("***** Erro de conexão com o banco de dados as " + Date().now() + " *****");
        } else {  
			conexao = db;
		}
	});
}