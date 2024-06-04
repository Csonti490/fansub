/*Oldalcím és háttér*/

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
}


function KepHiba(hibas){
    hibas.src = "img/sad1.jpg";
}