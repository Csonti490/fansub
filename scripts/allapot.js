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

var stts = document.getElementById("stts");
if(stts){
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
    stts.innerHTML = adat;
}

var Updates = [
    {
        title: "Új kinézet",
        status: "95%"
    },
    {
        title: "Leírások frissítése",
        status: "30%"
    },
    {
        title: "Sorozat előzetesek",
        status: "60%"
    }
]

var pdts = document.getElementById("pdts");
if(pdts){
    let adat = `<tr>
                                <th>Funkciók</th>
                                <th>Állapot</th>
                            </tr>`;
    for(let i = 0; i < Updates.length; i++){
        adat += `                            <tr>
                                <td>${Updates[i].title}</td>
                                <td>${Updates[i].status}</td>
                            </tr>`;
    }
    pdts.innerHTML = adat;
}

/* =-= =-= =-= =-= =-= */