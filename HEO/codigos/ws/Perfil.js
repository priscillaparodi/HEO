#!/bin/env node

function Perfil() {

    console.log("entrei");

    this.idUsuario = "";

    this.date = "";

    this.anger = 0;
    this.disgust = 0;
    this.fear = 0;
    this.joy = 0;
    this.sadness = 0;

    this.analytical = 0;
    this.confident = 0;
    this.writingTone = 0;

    this.openess = 0;
    this.conscientiousness = 0;
    this.extraversion = 0;
    this.agreeableness = 0;
    this.emotionalRange = 0;

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
            this.setIdUsuario(j.idUsuario);
            this.setDate(j.date);
            this.setAnger(j.anger);
            this.setDisgust(j.disgust);
            this.setFear(j.fear);
            this.setJoy(j.joy);
            this.setSadness(j.sadness);
            this.setAnalytical(j.analytical);
            this.setConfident(j.confident);
            this.setWritingTone(j.writingTone);
            this.setOpeness(j.openess);
            this.setConscientiousness(j.conscientiousness);
            this.setExtraversion(j.extraversion);
            this.setAgreeableness(j.agreeableness);
            this.setE,mlrmotionalRange(j.emotionalRange);

            return true;
        } else {
            return false;
        }
    }

    this.setIdUsuario = function (id) {
        this.idUsuario = id;
    }

    this.setDate = function (date) {
        this.date = date;
    }

    this.setAnger = function (anger) {
        this.anger = anger;
    }

    this.setDisgust = function (disgust) {
        this.disgust = disgust;
    }

    this.setFear = function (fear) {
        this.fear = fear;
    }

    this.setJoy = function (joy) {
        this.joy = joy;
    }

    this.setSadness = function (sadness) {
        this.sadness = sadness;
    }

    this.setAnalytical = function (analytical) {
        this.analytical = analytical;
    }

    this.setConfident = function (confident) {
        this.confident = confident;
    }

    this.setWritingTone = function (writingTone) {
        this.writingTone = writingTone;
    }

    this.setOpeness= function (openess) {
        this.openess = openess;
    }

    this.setConscientiousness = function (conscientiousness) {
        this.conscientiousness = conscientiousness;
    }

    this.setExtraversion = function (extraversion) {
        this.extraversion = extraversion;
    }

    this.setAgreeableness= function (agreeableness) {
        this.agreeableness = agreeableness;
    }

    this.setEmotionalRange = function (emotionalRange) {
        this.emotionalRange = emotionalRange;
    }

    this.getIdUsuario = function () {
        return this.idUsuario;
    }

    this.getDate = function () {
        return this.date;
    }

    this.getAnger = function () {
        return this.anger;
    }

    this.getDisgust = function () {
        return this.disgust;
    }

    this.getFear = function () {
        return this.fear;
    }

    this.getJoy = function () {
        return this.joy;
    }

    this.getSadness = function () {
        return this.sadness;
    }

    this.getAnalytical = function () {
        return this.analytical;
    }

    this.getConfident = function () {
        return this.confident;
    }

    this.getWritingTone = function () {
        return this.writingTone;
    }

    this.getOpeness = function () {
        return this.openess;
    }

    this.getConscientiousness = function () {
        return this.conscientiousness;
    }

    this.getExtraversion = function () {
        return this.extraversion;
    }

    this.getAgreeableness = function () {
        return this.agreeableness;
    }

    this.getEmotionalRange = function () {
        return this.emotionalRange;
    }
}

module.exports = Perfil;