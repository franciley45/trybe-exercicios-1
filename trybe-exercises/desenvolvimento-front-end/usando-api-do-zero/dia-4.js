
const input = document.querySelector('.inputfull');
const btn = document.querySelector('.btn')
const divs = document.querySelector('section');

function criaElementos(param) {

    const novo = document.createElement('div');
    const imagem = document.createElement('img');
    const testto = document.createElement('h5');

    novo.classList.add("input-group-text")

    divs.appendChild(novo);
    novo.appendChild(imagem);
    novo.appendChild(testto);

    imagem.src = param.imageUrl;
    testto.innerText = param.name;
}

async function pegaPokemon(paramentro) {
    const url = `https://pokeapi.co/api/v2/pokemon/${paramentro}/`;
    const result = await fetch(url);
    const data = await result.json();

    console.log("API terminou");

    const pokemon = {
        imageUrl: data.sprites.front_default,
        name: data.name,
    };
    criaElementos(pokemon)
}

btn.addEventListener('click', function () {
    const valorDinput = input.value
    pegaPokemon(valorDinput)
    input.value = '';
})
