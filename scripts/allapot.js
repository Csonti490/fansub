/* =-= Főoldal -> Állapotjelző =-= */
var Projects = [
    {
        title: "RWBY",
        episode: "5.évad 10.rész",
        status: "Fordítás alatt"
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