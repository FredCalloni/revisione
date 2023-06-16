interface config {
    nome?: string;
    età: number;
}

function crearePersona(config: config): {nome: string; età: number} {
    let persona = { nome: "Non ha informazioni", età: 0 }

    if (config.nome) {
        persona.nome = config.nome;
    }
    if (config.età) {
        persona.età = config.età;
    }

return persona;    
}

let Giorgio = crearePersona({ nome: "Giorgio" });
console.log(Giorgio);