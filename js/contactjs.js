
var nom = document.getElementById("Nom");



function verf_Nom() {
 
    if (nom.value.length > 3) {
        return true;
    } else {
        return false;
    }
}

function verf_Tele() {
    var tele = document.getElementById("tele").value;
    var verf = new RegExp("^0[6]([-. ]?[0-9]{2}){4}$");
    return verf.test(tele);
}

function verf_Email() {
    var email = document.getElementById("email").value;
    var verif = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    return verif.test(email);
}
function verf_msg(){
    var msg = document.getElementById("msg").value;
    if(msg.length > 10)
    return true;
    else 
    return false;

}

function chick_inp() {
    var err = "";
    if (verf_Nom()){
        document.getElementById("Nom").style.borderColor = "#1ad37693";

    }
        
    else{
        document.getElementById("Nom").style.borderColor = "#ee2c09";
        err += "Votre Nom insuffisant \n";
    }
        

    if (verf_Email())
        document.getElementById("email").style.borderColor = "#1ad37693";
    else{
        document.getElementById("email").style.borderColor = "#ee2c09";
        err += "Votre Email pas correct \n";
    }
        

    if (verf_Tele())
        document.getElementById("tele").style.borderColor = "#1ad37693";
    else{
        document.getElementById("tele").style.borderColor = "#ee2c09";
        err += "Votre Telephone pas correct \n";
    }
        

    if (verf_msg())
        document.getElementById("msg").style.borderColor = "#1ad37693";
    else{
        document.getElementById("msg").style.borderColor = "#ee2c09";
        err += "Votre Message insuffisant \n";

    }
    if(err.length>0)
    alert(err);
    else{
        alert("Your name : "+document.getElementById("Nom").value+"\nYour phone is : "+document.getElementById("tele").value+"\nYour Email is : "+document.getElementById("email").value+"\nYour Message is : "+document.getElementById("msg").value);

    }
    
}

document.getElementById("btn").addEventListener("click", chick_inp);


// var inp = document.getElementById("Nom");
//         inp.style.borderColor = "#1ad37693";
//         inp.focus();


//         var inp = document.getElementById("Nom");
//         inp.style.borderColor = "#ee2c09";
//         inp.focus();
