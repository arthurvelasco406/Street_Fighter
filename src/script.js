let p1 = document.querySelector("#pl1");

let p2 = document.querySelector("#pl2");

let containerSelect = document.querySelector("#container-select");

let pers = ['ryu', 'ehonda', 'blanka', 'guile', 'ken', 'chunli', 'zangief', 'dhalsim'];

let selectList = document.querySelectorAll('.img-select');

let containerBios = document.querySelector("#container-bios");

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
    for (let i = 0; i < pers.length; i++) {
        containerSelect.innerHTML += '<div class="select"><img src="src/images/menu/' + pers[i] + '.png" alt="" class="img-select" onClick=renderPlayer("' + pers[i] + '")></div>';
    }
}

function renderPersonagens() {
    for (let i = 0; i < pers.length; i++) {
        containerBios.innerHTML += '<div class="personagem"><img src="src/images/bio/' + pers[i] + '.png" alt=""><div class="texto-bio">dasdasdsadasdadasdsadasdsadasdasdsdaiv</div></div>'
    }

    /*Como as div personagens sao criadas só aqui, não tenho acesso antes, preciso fazer o listeners aqui, pois fora elas não existem*/
    let personagens = document.querySelectorAll(".personagem");
    
    let textoBios = document.querySelectorAll(".texto-bio");

    for(let i = 0; i < personagens.length; i++){
        personagens[i].addEventListener('mouseover', function(){
            textoBios[i].classList.add("bio-ativa");
        });


        personagens[i].addEventListener('mouseout', function(){
            textoBios[i].classList.remove("bio-ativa");
        });

    }

}


