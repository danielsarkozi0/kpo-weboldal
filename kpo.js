var userpont = 0;
var geppont = 0;

var userchoice = '';
var gepchoice ='';

const card = document.querySelector(".card__inner");

function kartyaflip(){
    card.classList.toggle('is-flipped');
}

function gepkpo(){
    var rnd = Math.floor(Math.random() * 3);
    if (rnd == 0){
        return 'k';
    }
    else if (rnd == 1){
        return 'p';
    }
    else if (rnd == 2){
        return 'o';
    }
}

function kpo(choice){
    gepchoice = gepkpo()
    userchoice = choice;
    document.getElementById("infobox").innerHTML = "...";
    document.getElementById("infobox").style.backgroundColor = "#fff";
    switch(gepchoice+userchoice) {
        case "kk":
        case "pp":
        case "oo":
          KepFrissites();
          setTimeout(() => {
            Pontok(3);
          }  
        ,1000);
          kartyaflip();
          break;
        case "kp":
        case "po":
        case "ok":
            KepFrissites();
            setTimeout(() => {
                Pontok(1);
              }  
            ,1000);
            kartyaflip();
            break;
        case "pk":
        case "op":
        case "ko":
            KepFrissites();
            setTimeout(() => {
                Pontok(2);
              }  
            ,1000);
            kartyaflip();
            break;
        default:
          return "error";
      }
}

function KepFrissites(){
    if(userchoice == 'k'){
        document.getElementById("userchoice").src="img/rock.png";
    }
    else if(userchoice == 'p'){
        document.getElementById("userchoice").src="img/paper.png";
    }
    else if(userchoice == 'o'){
        document.getElementById("userchoice").src="img/scissors.png";
    }
    console.log("kadpasdpdadp")
    if(gepchoice == 'k'){
        document.getElementById("compchoice").src="img/rock.png";
    }
    else if(gepchoice == 'p'){
        document.getElementById("compchoice").src="img/paper.png";
    }
    else if(gepchoice == 'o'){
        document.getElementById("compchoice").src="img/scissors.png";
    }
    
}

function Pontok(eredmeny){
    if (eredmeny == 1){
        userpont += 1;
        document.getElementById("upontszam").innerHTML = userpont;
        document.getElementById("infobox").innerHTML = "Nyertél!";
        document.getElementById("infobox").style.backgroundColor = "#03FE70";
        kiir("nyertel")
    }
    else if (eredmeny == 2){
        geppont += 1;
        document.getElementById("gpontszam").innerHTML = geppont;
        document.getElementById("infobox").innerHTML = "Vesztettél!";
        document.getElementById("infobox").style.backgroundColor = "#FF3333";
        kiir("vesztettel");
    }
    else{
        document.getElementById("infobox").innerHTML = "Döntetlen";
        document.getElementById("infobox").style.backgroundColor = "#A0A0A0";
        kiir("dontetlen");
    }
}

function kiir(szoveg){
    console.log(szoveg);
}
