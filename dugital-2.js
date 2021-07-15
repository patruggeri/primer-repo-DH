function noParesDeContarImparesHasta(numero) {
    let contador = 0;
    for (i = 0; i <= numero; i++) {
        if (i % 2 == 1) {
            contador = contador + 1;
        };
    };
    return contador;
};

console.log(noParesDeContarImparesHasta(10));