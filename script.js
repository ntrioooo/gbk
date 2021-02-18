let skorComp = 0;
let skorPlayer = 0;
let timeOut = "";

let displayHasil = document.getElementsByClassName("hasil")[0];
let displaySkorComp = document.getElementsByClassName("skor-comp")[0];
let displaySkorPlayer = document.getElementsByClassName("skor-player")[0];

let reset = document.getElementById("reset");
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");

batu.addEventListener("click", () => {
    janken(0);
});

gunting.addEventListener("click", () => {
    janken(1);
});
kertas.addEventListener("click", () => {
    janken(2);
});

reset.addEventListener("click", () => {
    if (confirm("Ini akan memulai ulang permainan, Anda yakin?")){
        skorComp = 0;
        skorPlayer = 0;
        displaySkorPlayer.innerHTML = skorPlayer;
        displaySkorComp.innerHTML = skorComp
        displayHasil.innerHTML = ' ';
    }
})


function janken(tangan){
    let jariComp = Math.floor(Math.random() * 3);

    switch (tangan){
        case 0:
            if (jariComp == 0){
                result("draw");
            } else if (jariComp == 1){
                result("player");
            } else{
                result("comp");
            }
            break;

        case 1:
            if (jariComp == 0){
                result("comp");
            } else if (jariComp == 1){
                result("draw");
            } else {
                result("player");
            }
            break;
        
            default:
                if(jariComp == 0){
                    result("player");
                } else if (jariComp == 1){
                    result("comp");
                } else {
                    result("draw");
                }
                break;
    }
}

function result(who){
    clearTimeout(timeOut);

    switch(who){
        case "comp":
            skorComp++;
            displaySkorComp.innerHTML = skorComp;
            displayHasil.innerHTML = ' ';
            var string = "You Win";
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(string));
            displayHasil.appendChild(p);
            console.log("Anda menang");
            break;
        case "player":
            skorPlayer++;
            displaySkorPlayer.innerHTML = skorPlayer;
            displayHasil.innerHTML = ' ';
            var string = "You Lose";
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(string));
            displayHasil.appendChild(p);
            console.log("Computer menang")
            break;
        default:
            displayHasil.innerHTML = ' ';
            var string = "Draw";
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(string));
            displayHasil.appendChild(p);
            console.log("Seri");
            break;
    }
}
