let p1 = document.querySelector("#pl1");

let p2 = document.querySelector("#pl2");

let containerSelect = document.querySelector("#container-select");

let pers = ['ryu', 'ehonda', 'blanka', 'guile', 'ken', 'chunli', 'zangief', 'dhalsim'];

let selectList = document.querySelectorAll('.img-select');

let control = false;

function renderPlayer(player) {
    if (control == false) {
        p1.setAttribute('src', 'src/images/gifs/' + player + '.gif');
        control = true;
    }
    else {
        p2.setAttribute('src', 'src/images/gifs/' + player + '.gif');
        control = false;
    }

}

function renderSelect() {
    let html = '';
    for (let i = 0; i < pers.length; i++) {
        html += '<div class="select"><img src="src/images/menu/' + pers[i] + '.png" alt="" class="img-select" onClick=renderPlayer("'+pers[i]+'")></div>';
    }

    containerSelect.innerHTML = html;

}