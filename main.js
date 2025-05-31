/* =-= Projektek -> Hibás kép cseréje =-= */
function KepHiba(hibas){
    hibas.src = "img/noposter.jpg";
}
/* =-= =-= =-= =-= =-= */

/* =-= Projektek -> Mi látszódjon =-= */
const urlParams = new URLSearchParams(window.location.search);
const allapot = urlParams.get('allapot');
var info = document.getElementById("infocska");
if(info){
    if(allapot){
        document.getElementById('semmi').classList.add("d-none");
        document.getElementById(allapot).classList.remove("d-none");
        document.getElementById('vissza').classList.remove("d-none");
        info.innerText = "Kattints a kívánt sorozat képére.";
    }
    else{
        document.getElementById('semmi').classList.remove("d-none");
        document.getElementById('vissza').classList.add("d-none");
        info.innerText = "Kattints egy állapotra.";
    }
}
/* =-= =-= =-= =-= =-= */