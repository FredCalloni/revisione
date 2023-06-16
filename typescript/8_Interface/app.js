function crearePersona(config) {
    var persona = { nome: "Non ha informazioni", età: 0 };
    if (config.nome) {
        persona.nome = config.nome;
    }
    if (config.età) {
        persona.età = config.età;
    }
    return persona;
}
var Giorgio = crearePersona({ nome: "Giorgio" });
console.log(Giorgio);
