let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){this.peso +=p; return this.peso}
};

console.log(`${amigo.nome} pesa ${amigo.peso}Kg, mas comeu e agora pesa ${amigo.engordar(10)}Kg.`);