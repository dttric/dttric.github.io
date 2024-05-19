var mobilenameIndex = 0;
var mobilenicknames = ["dttric", "cайлент", "лягушка", "toadtg"];

function changemobileNameAutomatically() {
    $("#mobilenicknamechange").fadeOut(500, function() {
        $(this).text(mobilenicknames[mobilenameIndex]).fadeIn(500);
    });
    mobilenameIndex = (mobilenameIndex + 1) % mobilenicknames.length;
}

setInterval(changemobileNameAutomatically, 1700);
