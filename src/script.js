const select = document.querySelector("#select");

let p1 = document.querySelector("#pl1");

let p2 = document.querySelector("#pl2");

let pers = ['ryu','ehonda','blanka','guile','ken','chunli','zangief','dhalsim'];

let control = false;

function renderPlayer(player){
    if(control == false){
        p1.setAttribute('src','src/images/gifs/'+player+'.gif');
        control = true;
    }
    else{
        p2.setAttribute('src','src/images/gifs/'+player+'.gif');
        control = false;
    }
    
}


