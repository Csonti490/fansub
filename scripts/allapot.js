/* =-= Hírfolyam -> Frissítések, Állapotjelző =-= */
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
    let adat = `<tr>
                                <th>Sorozat</th>
                                <th>Epizód</th>
                                <th>Állapot</th>
                            </tr>`;
    for(let i = 0; i < Projects.length; i++){
        adat += `                            <tr>
                                <td>${Projects[i].title}</td>
                                <td>${Projects[i].episode}</td>
                                <td class="text-center">${Projects[i].status}</td>
                            </tr>`;
    }
    hely.innerHTML = adat;
}
/* =-= =-= =-= =-= =-= */