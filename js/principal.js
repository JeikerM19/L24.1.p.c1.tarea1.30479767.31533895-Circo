import Cl_Espectador from './Cl_Espectador.js';
import Cl_Circo from './Cl_Circo.js';

let cir =  new Cl_Circo();
let resp = 1;

while(resp == 1){
    let n, s, e, opc;
    n = prompt("Ingrese su nombre: ");
    e = parseInt(prompt("Ingrese su edad: "));
    s = prompt("Ingrese su genero(M o F): ");
    opc = parseInt(prompt("¿ Desea procesar mas espectadores ? 1(SI), 2(NO): "));
    let spc = new Cl_Espectador(n, e, s);
    cir.procesarEspectador(spc);
    let salida = document.getElementById("Salida");
    salida.innerHTML += "<br> El espectador " + spc.nom + " debe cancelar: " + spc.entrada() + "$";
    resp = opc;  
}
let salida = document.getElementById("Salida");
salida.innerHTML += "<br> Promedio de las ventas hechas a espectadores adolescentes: " + cir.promPagA();
salida.innerHTML += "<br> Entre niños y adolescentes el espectador que asistió más al circo fue: " + cir.aisCirco();
salida.innerHTML += "<br> Porcentaje que representa la cantidad de niños que asistieron al circo: " + cir.porctN() + "%";
