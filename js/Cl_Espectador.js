
export default class Cl_Espectador {
    constructor(n, e, s) {
        this.nom = n;
        this.edad = e;
        this.sexo = s;
    }
    set nom(n) {
        this._nom = n;
    }
    get nom() {
        return this._nom;
    }
    set edad(e) {
        this._edad = e;
    }
    get edad() {
        return this._edad;
    }
    set sexo(s) {
        this._sexo = s;
    }
    get sexo() {
        return this._sexo;
    }
    desc() {
        if (this.edad <= 18) {
            return 15 * 0.10;
        }
        else {
            return 0;
        }
    }
    entrada() {
        return 15 - this.desc();
    }
}