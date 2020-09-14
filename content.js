
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
var task = document.getElementById('dtasktitle').innerHTML;
var timeWait = 30000;
function vocabulary() {
    var clickAudio = document.getElementsByClassName('fa-play-circle');
    var i;

    async function load() {
        for (i = 0; i < clickAudio.length; i++) {
            clickAudio[i].click();
            await timer(5000);
        }
        //4
        document.getElementsByClassName("btn-info")[1].click();

        setTimeout(function () {
            window.location.reload();
        }, 5000);

    }

    load();
}


function mcq() {

    var click = document.getElementsByClassName('dtitle');
    async function load() {
        for (i = 0; i < click.length; i++) {
            click[i].click();
            await timer(2000);
        }

    }

    load();
    setTimeout(function () {
        window.location.reload();
    }, 4000 * click.length);
}
function checkRadio(radio) {
    var i;
    for (i = 0; i < radio.length; i++) {
        radio[i].checked = true;
    }
    setTimeout(function () {
        document.getElementsByClassName("btn-info")[1].click();
    }, 33000);

    setTimeout(function () {
        document.getElementsByClassName("btn-danger")[0].click();
    }, 36000);

    var results = [];
    setTimeout(function () {
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked) results[i] = true;
            else results[i] = false;
        }
    }, 37000);
    setTimeout(function () {
        var lamLai = document.getElementsByClassName("btn-primary");
        if (lamLai) lamLai[0].click();
    }, 38000);
    setTimeout(function () {
        for (i = 0; i < radio.length; i++) {
            radio[i].checked = results[i];
        }
    }, 40000);
    //4
    setTimeout(function () {
        document.getElementsByClassName("btn-info")[1].click();
    }, 43000);


    setTimeout(function () {
        window.location.reload();
    }, 45000);
}

function checkWrite() {
    var writeAns = document.getElementsByClassName('danw dinline');
    //setTimeout(function () { }, 30000);
    var answer = [];
    var i;
    for (i = 0; i < writeAns.length; i++) {
        writeAns[i].value = "LMinh";
    }
    setTimeout(function () {
        document.getElementsByClassName("btn-info")[1].click();
    }, 33000);
    //2
    setTimeout(function () {
        document.getElementsByClassName("btn-danger")[0].click();
    }, 36000);
    setTimeout(function () {
        for (i = 0; i < writeAns.length; i++) {
            answer[i] = writeAns[i].value;
        }
    }, 39000);
    //3
    setTimeout(function () {
        var lamLai = document.getElementsByClassName("btn-primary");
        if (lamLai.length>0) lamLai[0].click();
    }, 40000);

    setTimeout(function () {
        for (i = 0; i < writeAns.length; i++) {
            writeAns[i].value = answer[i];
        }
    }, 43000);
    //4
    setTimeout(function () {
        document.getElementsByClassName("btn-info")[1].click();
    }, 45000);
    setTimeout(function () {
        window.location.reload();
    }, 48000);
}
if (task.indexOf('vocabulary') != -1) {
    vocabulary();
} else if (task.indexOf('mcq') != -1) {
    mcq();
} else if (task.indexOf('Listen') != -1 && task.indexOf('question') != -1) {

    var checkAudio = false;
    var audio = document.getElementsByClassName('aud-btn play');
    var writeAns = document.getElementsByClassName('danw dinline');
    if (audio.length>0) {
        setTimeout(function () { audio[0].click(); }, 30000);
        checkAudio = true;
    }
    //setTimeout(function () {}, timeWait);
    var radio = document.getElementsByClassName('deck');
    //if(document.body.contains(radio))
    if (radio.length>0) {
        checkRadio(radio);
    } else {
        checkWrite();
    }
} else {
    checkWrite();
}