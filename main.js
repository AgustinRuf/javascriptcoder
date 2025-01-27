function loguear (){
let correcto = false;

    do{
        let nombre = prompt("Nombre de usuario");
        let contraseña = prompt("Contraseña");

        if (nombre === "Agustín" && contraseña === "Tlon55"){
            alert ("Bienvenido a tu banco de confianza.");
            correcto = true; 
            break;
        } else{ 
            alert ("Ingresá un usuario y contraseña correctos."); 
        }
    }while (!correcto);
}

loguear ();


function extraction() {
    let saldo = 75900; 
    let monto; 
    let intentos =0;

    do {
        monto = prompt("Ingresá monto de extracción");
        monto = parseInt(monto);

        if (monto <= saldo) {
            alert("Tu extracción es de $ " + monto);
            break;
        }        
        if (monto > saldo) {
            alert("Saldo insuficiente para la extracción. Intentá otro monto.");
        }else {
            alert("Ingresá un monto válido.");
            intentos++
            if (intentos > 3) {
                alert("Vuelve a intentarlo más tarde");
                break;
            }
        }
    } while (true);
}

extraction();

function historial() {
    const historial = [1000, 2000, 5000, 10000, 20000, 50000, 100000];
    let consulta = confirm("¿Consultar tu historial de extracciones?");

    if (consulta === true) {
        for (let i = 0; i < historial.length; i++)
        alert("Tu historial de extracciones es: $ " + historial[i]);
        } else {
            alert("Gracis. Vuelva pronto");
    }
}

historial();
