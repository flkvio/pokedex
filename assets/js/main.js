/*function oi(){
    window.alert('hi');
}
oi();
console.log('oi');  */

/*fetch(url)
  .then(function (response) {
    response.json()
    .then(function (responseBody) {
        console.log(responseBody)
    })
  })

  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    console.log("Requisição Concluída");
  });*/
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMore");
const limit = 16;
let offset = 0;

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
      <li class="pokemon ${pokemon.type}"> 
          <span class="number">${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          
          <div class="detail">
              <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
              </ol>
              <img src="${pokemon.photo}">
          </div>
      </li>
  `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItems(offset, limit);
});

//pokemonList.appendChild('')

/*const listItems = []  

pokeApi.getPokemons()
  .t hen((pokemons = []) => {
    
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      listItems.push(convertPokemonToLi(pokemon))
    }
  console.log(listItems)
  })

  .catch((error) => console.error(error));*/
