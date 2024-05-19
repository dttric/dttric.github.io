var nameIndex = 0;
var nicknames = ["dttric", "cайлент", "лягушка", "toadtg"];

function changeNameAutomatically() {
    $("#nicknamechange").fadeOut(500, function() {
        $(this).text(nicknames[nameIndex]).fadeIn(500);
    });
    nameIndex = (nameIndex + 1) % nicknames.length;
}

setInterval(changeNameAutomatically, 1700);
