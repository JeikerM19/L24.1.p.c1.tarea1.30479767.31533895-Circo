

export default class Cl_Circo {
    constructor() {
        this.acumPagA = 0.0;
        this.contA = 0;
        this.contN = 0;
        this.contT = 0;
    }
    procesarEspectador(spc) {
        this.contT++;
        if (spc.edad > 12 && spc.edad <= 18) {
            this.contA++;
            this.acumPagA += spc.entrada();
        }
        if (spc.edad <= 12) {
            this.contN++;
        }
    }
    promPagA() {
        return this.acumPagA / this.contA;
    }
    aisCirco() {
        if (this.contN > this.contA)
            return "Niño";
        else
            return "Adolescente";
    }
    porctN(){
        return this.contN * (100 / this.contT);
    }
}