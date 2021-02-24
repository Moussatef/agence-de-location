let carburant = ["Electrique", "Hybride", "Essence", "Diesel"];
var type_V={
    "Motos":["Electrique","Essence"],
    "Citadine":["Electrique", "Hybride", "Essence", "Diesel"],
    "Compact": ["Hybride", "Essence", "Diesel"],
    "Berline": ["Essence", "Diesel"],
    "Utilitare":["Diesel"],
    "Engin" :["Essence", "Diesel"],
    "Camion" :["Diesel"]

}
let boite = ["Manuelle", "Automatique"];
// var type_V = document.querySelector(".vehicule").value;
let select_carbu = document.getElementById("carbur");
let select_boit = document.getElementById("boit");
var prix_pors;
var prix_voit;
var pors_carbu;
var pors_boit =0;
document.getElementById("btn_ok").style.display="none";


function check_type_v() {
    let choix = " <option >-Votre choix-</option>";
    var veh = document.getElementById("vehicule");
    switch (veh.value) {
        case "Motos":
            select_carbu.innerHTML = choix;
            select_carbu.innerHTML += `<option value="${carburant[0]}">${carburant[0]} </option> <option value="${carburant[2]}">${carburant[2]}</option>`;
            prix_voit = 10;
            break
        case "Citadine":
            select_carbu.innerHTML = choix;
            for (let i = 0; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML =  `<option value="${boite[0]}">${boite[0]} </option>`;
            prix_voit = 12;
            break;
        case "Compact":
            select_carbu.innerHTML = choix;
            for (let i = 1; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML =  `<option value="${boite[0]}">${boite[0]} </option>`;
            prix_voit = 14;
            break;
        case "Berline":
            select_carbu.innerHTML = choix;
            for (let i = 1; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML =  `<option value="${boite[1]}">${boite[1]} </option>`;
            prix_voit = 20;

            break;
        case "Utilitare":
            select_carbu.innerHTML = choix + `<option value="${carburant[3]}">${carburant[3]} </option>`;
            select_boit.innerHTML = `<option value="${boite[0]}">${boite[0]} </option>`;
            prix_voit = 16;
            break;
        case "Engin":
            select_carbu.innerHTML = choix;
            for (let i = 2; i < 4; i++) {
                select_carbu.innerHTML += `<option value="${carburant[i]}">${carburant[i]} </option>`;
            }
            select_boit.innerHTML =  `<option value="${boite[0]}">${boite[0]} </option>`;
            prix_voit = 900;
            break;
        case "Camion":
            select_carbu.innerHTML = choix + `<option value="${carburant[3]}">${carburant[3]} </option>`;
            select_boit.innerHTML = `<option value="${boite[1]}">${boite[1]} </option>`;
            prix_voit = 250;
            break;

        default:
            select_carbu.innerHTML = choix;

    }
}

function check_carbu() {
    switch (select_carbu.value) {
        case "Electrique": pors_carbu = 0.05;
            break;
        case "Hybride": pors_carbu = 0.09;
            break;
        case "Essence": pors_carbu = 0.14;
            break;
        case "Diesel": pors_carbu = 0.21;
            break;
        default: pors_carbu = 0;
    }
}
function check_boit() {
    if (select_boit.value=="Automatique") 
        pors_boit = 0.19;
        else pors_boit = 0;
   
}
let propt1 = document.getElementById("propt1");
let propt2 = document.getElementById("propt2");

function getduri() {
    let date_Dep = document.getElementById("dateDep").value;
    let date_Fin = document.getElementById("dateFin").value;
    let Nom = document.getElementById("Nom").value;
    let email = document.getElementById("email").value;
    let CIN = document.getElementById("cin").value;
    let typeca = document.getElementById("vehicule").value;
    propt1.style.display="block";
    document.getElementById("btn_ok").style.display="block";
    let deffDate = new Date(date_Fin) - new Date(date_Dep);
    let diffInDays = deffDate / (1000 * 60 * 60 * 24);
    if(diffInDays>=0){
        prix_pors = diffInDays * (prix_voit + (prix_voit * pors_carbu) + (prix_voit * pors_boit));
        propt1.className="prop";
        propt2.innerHTML = "<p> Nom Et Prenom :  " + Nom + " <br/>CIN : " + CIN + "<br/>  Email : " + email+"<br/> Type du véhicule : " + typeca + "<br/> carburant : " + select_carbu.value + "<br/> boite à vitesse : " + select_boit.value + " <br/>durée de réservation (en jours) est :  " + diffInDays + "<br/>prix total est :  " + prix_pors + "€ <p> "
    
    }else
    alert("Errer in Date saisir !!!");
    
}
function ok(){
    propt1.style.display="none";
}

select_carbu.addEventListener("change", check_carbu);
select_boit.addEventListener("change", check_boit);
document.getElementById("valider").addEventListener("click", getduri);
document.getElementById("btn_ok").addEventListener("click", ok);
