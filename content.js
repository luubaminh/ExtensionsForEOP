
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
var task = document.getElementById('dtasktitle').innerHTML;
//var vocabulary = Number(task.indexOf('vocabulary'));

var timeWait = 30000;
if (task.indexOf('vocabulary') != -1) {

    //class audio : fa fa-play-circle daudio
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
} else if (task.indexOf('mcq') != -1) {
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
    }, 5000 * click.length);
} else {
    //document.getElementsByClassName('aud-btn play')[0].click();
    var checkAudio = false;
    var audio = document.getElementsByClassName('play');
    var writeAns = document.getElementsByClassName('danw dinline');
    if (audio != null) {
        setTimeout(function () { audio[0].click(); }, 30000);
        checkAudio = true;
    }
    //setTimeout(function () {}, timeWait);
    var radio = document.getElementsByClassName('deck');
    if (radio != null) {
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

    } else if (writeAns != null) {
        //1
        setTimeout(function () {}, timeWait);
        var answer = [];
        var x = document.getElementsByClassName("danw dinline");
        var i;
        setTimeout(function () {
            for (i = 0; i < x.length; i++) {
                x[i].value = "Lưu Bá Minh";
            }
        }, timeWait + 2000);

        setTimeout(function () {
            document.getElementsByClassName("btn-info")[1].click();
        }, timeWait + 3000);

        //2
        setTimeout(function () {
            document.getElementsByClassName("btn-danger")[0].click();
        }, timeWait + 6000);


        setTimeout(function () {
            for (i = 0; i < x.length; i++) {
                answer[i] = x[i].value;
            }
        }, timeWait + 9000);


        //3
        setTimeout(function () {
            var lamLai = document.getElementsByClassName("btn-primary");
            if (lamLai) lamLai[0].click();
        }, timeWait + 10000);

        setTimeout(function () {
            for (i = 0; i < x.length; i++) {
                x[i].value = answer[i];
            }
        }, timeWait + 13000);

        //4
        setTimeout(function () {
            document.getElementsByClassName("btn-info")[1].click();
        }, timeWait + 15000);


        setTimeout(function () {
            window.location.reload();
        }, timeWait + 18000);
    }
} 