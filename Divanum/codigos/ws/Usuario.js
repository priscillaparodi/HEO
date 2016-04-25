#!/bin/env node

function Usuario() {

    this.id = "";
    this.nome = "";
    this.sexo = "";
    this.email = "";
    this.senha = "";
    this.nascimento = "";

    this.jsonString = function () {
        return JSON.stringify(this);
    }

    this.json = function (j) {
        var ok = false;
        if (typeof j == typeof "x") {
            j = JSON.parse(j);
            ok = true;
        } else if (typeof j == typeof new Object) {
            ok = true;
        } else {
            ok = false;
        }
        if (ok) {
            // aqui dentro tem que ter todos os sets
            this.setId(j.id);
            this.setNome(j.nome);
            this.setSexo(j.sexo);
            this.setEmail(j.email);
            this.setSenha(j.senha);
            this.setNascimento(j.nascimento);
            return true;
        } else {
            return false;
        }
    }

    this.setId = function (id) {
        this.id = id;
    }

    this.setNome = function (nome) {
        this.nome = nome;
    }

    this.setSexo = function (sexo) {
        this.sexo = sexo;
    }

    this.setEmail = function (email) {
        this.email = email;
    }

    this.setSenha = function (senha) {
        this.senha = senha;
    }

    this.setNascimento = function (nascimento) {
        this.nascimento = nascimento;
    }

    this.getId = function () {
        return this.id;
    }

    this.getNome = function () {
        return this.nome;
    }

    this.getSexo = function () {
        return this.sexo;
    }

    this.getEmail = function () {
        return this.email;
    }

    this.getSenha = function () {
        return this.senha;
    }

    this.getNascimento = function () {
        return this.nascimento;
    }
}

module.exports = Usuario;