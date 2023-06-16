class Animale {
    camminare() {
        console.log("Il animale ha andato");
    }
}

class Cane extends Animale {
    nome: string;
    constructor(nome: string) {
        super();
        this.nome = nome;
    }
    abbaiare() {
        console.log("Au Au");
    }
}