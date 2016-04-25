var dateToday = new Date();
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    // The title label to use for the month nav buttons
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3,
    minDate: dateToday,
    labelMonthNext: 'Próximo Mês',
    labelMonthPrev: 'Mês Anterior',
    // The title label to use for the dropdown selectors
    labelMonthSelect: 'Selecione o Mês',
    labelYearSelect: 'Selecione o ano',
    // Months and weekdays
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    // Materialize modified
    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    // Today and clear
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Fechar',
    // The format to show on the `input` element
    format: 'd mmmm, yyyy',
    onSelect: function (selectedDate) {
        var option = this.id == "from" ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
        dates.not(this).datepicker("option", option, date);
    }
});


$(".btnUp").click(function () {
    var num = $(this).parent(".timeContainer").find(".Number");
    var val = parseInt($(num).text())
    if (val < 24) //change this if you wan't hour logic
        $(num).text(("0" + (val + 1)).slice(-2));
});

$(".btnDown").click(function () {
    var num = $(this).parent(".timeContainer").find(".Number");
    var val = parseInt($(num).text())
    if (val > 0) //probably you won't change this
        $(num).text(("0" + (val - 1)).slice(-2));
});