#!/bin/env node

function DivanumCore() {

    var Tone = require('./toneAnalyzer.js');
    var tone = new Tone();
    var translate = require('./translator.js');

    var Perfil = require('./Perfil.js');
    this.perfil = new Perfil();
    var that = this;
    this.textToPerfil = function (t, f) {

        var texto = '';

        translate(t, function (err, translate) {
            if (err) {
                console.log(err + ' ON TRANSLATE');
            } else {
                texto = translate.translations[0].translation;
                tone.analyzer(texto, function (err, resultado) {

                    console.log('OK ------------' + texto);
                    if (err) {
                        console.log(err);
                    } else {
                        var tones0 = resultado.document_tone.tone_categories[0];
                        //console.log('tone0', tones0);
                        var tones1 = resultado.document_tone.tone_categories[1];

                        var tones2 = resultado.document_tone.tone_categories[2];

                        that.perfil.setAnger(parseFloat(tones0.tones[0].score));
                        that.perfil.setDisgust(parseFloat(tones0.tones[1].score));
                        that.perfil.setFear(parseFloat(tones0.tones[2].score));
                        that.perfil.setJoy(parseFloat(tones0.tones[3].score));
                        that.perfil.setSadness(parseFloat(tones0.tones[4].score));

                        that.perfil.setAnalytical(parseFloat(tones1.tones[0].score));
                        that.perfil.setConfident(parseFloat(tones1.tones[1].score));
                        that.perfil.setWritingTone(parseFloat(tones1.tones[2].score));

                        that.perfil.setOpeness(parseFloat(tones2.tones[0].score));
                        that.perfil.setConscientiousness(parseFloat(tones2.tones[1].score));
                        that.perfil.setExtraversion(parseFloat(tones2.tones[2].score));
                        that.perfil.setAgreeableness(parseFloat(tones2.tones[3].score));
                        that.perfil.setEmotionalRange(parseFloat(tones2.tones[4].score));

                        var date = new Date();

                        var hour = date.getHours();
                        hour = (hour < 10 ? "0" : "") + hour;

                        var min = date.getMinutes();
                        min = (min < 10 ? "0" : "") + min;

                        var sec = date.getSeconds();
                        sec = (sec < 10 ? "0" : "") + sec;

                        var year = date.getFullYear();

                        var month = date.getMonth() + 1;
                        month = (month < 10 ? "0" : "") + month;

                        var day = date.getDate();
                        day = (day < 10 ? "0" : "") + day;

                        var dateTime = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

                        that.perfil.setDate(dateTime);

                        //console.log('perfil', that.perfil);

                        f(that.perfil);

                    }
                });
            }
        })
    }

    this.validaPerfis = function (perfil1, perfil2, f) {

        var baixo = 0.2;
        var medioBaixo = 0.45;
        var medio = 0.5;
        var medioAlto = 0.55;
        var alto = 0.7;

        if (perfil1.anger > medioAlto && perfil2.anger > medioAlto) {
            f(false);
            return;
        }
        if (perfil1.sadness > medioAlto && perfil2.sadness > medioAlto) {
            f(false);
            return;
        }
        if (perfil1.joy < baixo && perfil2.joy < baixo) {
            f(false);
            return;
        }
        f(true);
        return true;
    }

}

module.exports = DivanumCore;