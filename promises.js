const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})

const lidaComORetornoDaCall = (resultado) => {
    const personagens = resultado.data.results;
    const rickSanchez = personagens[0];
    if (rickSanchez.status === 'Alive') 
        throw new Error('O Rick não pode estar vivo.'); 
    return rickSanchez.name;
}

const globalHandler = (error) => {
    console.log('Isso aqui é o Catch => ' + error.message);
};

function minhaChamada() {
    return instance.get('/character')
    .then(lidaComORetornoDaCall)
    // .then(console.log)
    .catch(globalHandler)
};


async function main() {
    const nomeDoRick = minhaChamada().then((data) => {
        console.log('Olá Cedro denovo.');
    })
    .catch();
    console.log('Oi Cedro!');
}

main();