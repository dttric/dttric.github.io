let nameIndex = 0;
let mobilenameIndex = 0;
let nicknames = ["dttric", "cайлент", "toadtg"];

function changeNameAutomatically() {
    $("#nicknamechange").fadeOut(500, function() {
        $(this).text(nicknames[nameIndex]).fadeIn(500);
    });
    nameIndex = (nameIndex + 1) % nicknames.length;
}

function changemobileNameAutomatically() {
    $("#mobilenicknamechange").fadeOut(500, function() {
        $(this).text(nicknames[mobilenameIndex]).fadeIn(500);
    });
    mobilenameIndex = (mobilenameIndex + 1) % nicknames.length;
}

setInterval(changemobileNameAutomatically, 1700);
setInterval(changeNameAutomatically, 1700);
