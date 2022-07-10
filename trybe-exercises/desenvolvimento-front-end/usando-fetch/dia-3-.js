

function append(pokemon) {
  const section = document.querySelector(".container");

  const divCard = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const img = document.createElement("img");


  img.classList.add("card-img-top");
  divCard.classList.add("card");
  
  
  section.appendChild(divCard)
  divCard.appendChild(img);
  divCard.appendChild(cardTitle);

  img.src = pokemon.imageUrl;
  cardTitle.innerHTML = pokemon.name;
}

async function fetchPokemonAsyncAwait(pokemonName) {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const result = await fetch(URL);
    const data = await result.json();

    console.log("API terminou");

    const pokemon = {
      imageUrl: data.sprites.front_default,
      name: data.name,
    };
    append(pokemon);
  } catch (error) {
    console.log("Erro na api", error);
  }
}

/* function requestPokemons() {
  fetchPokemonAsyncAwait("pikachu");
  fetchPokemonAsyncAwait("charmander");
  fetchPokemonAsyncAwait("mew");
  fetchPokemonAsyncAwait("mewtwo");
  console.log("Vivemos num mundo pokemon Async");
}
 */
async function requestPokemonsAsyncAwait() {
  await fetchPokemonAsyncAwait("pikachu");
  await fetchPokemonAsyncAwait("charmander");
  await fetchPokemonAsyncAwait("mew");
  await fetchPokemonAsyncAwait("mewtwo");
  console.log("Vivemos num mundo pokemon Sync");
}

/* function requestPokemonsPromiseAll() {
  Promise.all([
    fetchPokemonAsyncAwait("pikachu"),
    fetchPokemonAsyncAwait("charmander"),
    fetchPokemonAsyncAwait("mew"),
    fetchPokemonAsyncAwait("mewtwo"),
  ]).then(() => {
    console.log("Vivemos num mundo pokemon Async");
  });
} */

window.onload = () => {
  requestPokemonsAsyncAwait();
};

