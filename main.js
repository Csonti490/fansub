/* =-= Főoldal -> Állapotjelző =-= */
var Projects = [
    {
        title: "RWBY",
        episode: "5.évad 9.rész",
        status: "Lektorálás alatt"
    },
    {
        title: "RWBY - World of Remnant",
        episode: "3.rész",
        status: "Ideiglenesen szünetel"
    }
]

var hely = document.getElementById("stts");
if(hely){
    let adat = "";
    for(let i = 0; i < Projects.length; i++){
        adat += `                            <div class="row text-center border my-1 d-flex justify-content-center align-items-center">
                                <div class="col-12 col-md-4">
                                    ${Projects[i].title}
                                </div>
                                <div class="col-12 col-md-4">
                                    ${Projects[i].episode}
                                </div>
                                <div class="col-12 col-md-4">
                                    ${Projects[i].status}
                                </div>
                            </div>`;
    }
    hely.innerHTML = adat;
}
/* =-= =-= =-= =-= =-= */

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





/*

    position: relative;
    .pgomb {
    z-index: 1;
    position: absolute;
    bottom: 50%;
    font-size: 50px;
    line-height: 50px;
    }
    <p class="p-0 m-0 text-center pgomb"><i class="fa-regular fa-circle-play"></i></p>

var pictures = ['1.png','2.png','3.jpg','4.jpg','5.jpg','6.jpg'];

var kephely = document.getElementById("httr");
if(kephely){
    window.onload = (event) => {
        Keptolt();
    };
    function Keptolt(){
        var rand = Math.floor(Math.random() * pictures.length);
        kephely.style.backgroundImage = "url(img/bgc/kep"+pictures[rand]+")";
    }
}*/