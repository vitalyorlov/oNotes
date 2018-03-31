document.addEventListener('DOMContentLoaded', function () {
    var noteInput = document.getElementById('note');
    var noteText = localStorage.getItem("oNote");
    noteInput.value = noteText;

    noteInput.addEventListener("focusout", function (event) {
        localStorage.setItem("oNote", noteInput.value);
    });
}, false);
