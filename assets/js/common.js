$(document).ready(function() {
    $('a.abstract').on("click", function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').on("click", function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
