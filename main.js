function loguear() {

    let nombre = document.getElementById("nombre");
    let contraseña = document.getElementById("contraseña");
    let boton = document.getElementById("boton");
    let parrafo = document.createElement("p");
    document.body.appendChild(parrafo);

    boton.addEventListener("click", () => {
        if (nombre.value === "Agustín" && contraseña.value === "Tlon55") {
            parrafo.textContent = "Bienvenido a tu banco de confianza.";
            setTimeout(() => {
                extraction ();
            }, 1000);
        } else {
            parrafo.textContent = "Ingresá un usuario y contraseña correctos.";
        }
    });
};

loguear ();

function extraction() {
    let saldo = 75900;
    let form = document.createElement("form");
    let inputMonto = document.createElement("input");
    let botonExtraccion = document.createElement("button");
    let mensaje = document.createElement("p");

    inputMonto.placeholder = "Monto de extracción";
    botonExtraccion.textContent = "Extraer";

    form.appendChild(inputMonto);
    form.appendChild(botonExtraccion);
    document.body.appendChild(form);
    document.body.appendChild(mensaje);
    

    form.addEventListener("submit", (event)=> {    
        event.preventDefault(); 
        let monto = parseInt(inputMonto.value);    
        if (!monto || monto <= 0) {
            mensaje.textContent = "Ingresá un monto válido.";
            return;
            }
        if (monto <= saldo) {
            saldo -= monto;
            mensaje.textContent = `Tu extracción es de $${monto}. Saldo restante: $${saldo}`;
            let extracciones = JSON.parse(localStorage.getItem("extracciones")) || [];
            let fecha = new Date().toLocaleDateString();
            extracciones.push({ monto, fecha });
            localStorage.setItem("extracciones", JSON.stringify(extracciones));

            setTimeout(() => {
                historial ();
            }, 1000);
        } else {
            mensaje.textContent = "Saldo insuficiente para la extracción. Intentá otro monto.";
        }
            inputMonto.value = "";
    });
}

function historial() {
    const extraccionesHistorial = [
        { monto: 1000, fecha: "25-2-2024" },
        { monto: 2000, fecha: "4-3-2024" },
        { monto: 5000, fecha: "10-4-2024" },
        { monto: 10000, fecha: "21-5-2024" },
        { monto: 20000, fecha: "30-5-2024" },
        { monto: 50000, fecha: "7-8-2024" },
        { monto: 100000, fecha: "15-9-2024" }
    ];

    const extraccionesGuardadas = JSON.parse(localStorage.getItem("extracciones")) || [];
    const extracciones = extraccionesHistorial.concat(extraccionesGuardadas);

    let consulta = document.createElement ("p");
    let boton = document.createElement("button");
    document.body.appendChild(consulta);
    consulta.textContent = "¿Consultar tu historial de extracciones?";
    document.body.appendChild(boton);
    boton.textContent = "Sí, ver historial";
    let mensaje = document.createElement("p");
    document.body.appendChild(mensaje);

    boton.addEventListener("click", () => {
        let verhistorial = `
            <ul>
                ${extracciones.map(item => `<li>Fecha: ${item.fecha} - Monto: ${item.monto}</li>`).join("")}
            </ul>`
        mensaje.innerHTML = verhistorial;
    });
}
