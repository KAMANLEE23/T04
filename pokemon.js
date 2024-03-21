//provided to fill the leading zero.
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

async function fetchPokemon(url) {
    const secondAPI = await fetch(url);
    const fetchPokemon = await secondAPI.json(); //TODO 4

    var getDiv = document.getElementById(fetchPokemon.name); //TODO 5

    var p = document.createElement("p");
    p.setAttribute("class", "pid");
    var id = fetchPokemon.id;
    var textNode = document.createTextNode(pad(id, 3));
    p.appendChild(textNode);
    getDiv.appendChild(p); //TODO 6

    var img = document.createElement("img");
    img.setAttribute("src", fetchPokemon.sprites.front_default);
    getDiv.appendChild(img) //TODO 7

    var p1 = document.createElement("p");
    p1.setAttribute("class", "name");
    var textNode1 = document.createTextNode(fetchPokemon.name.toUpperCase());
    p1.appendChild(textNode1);
    getDiv.appendChild(p1); //TODO 8

    var p2 = document.createElement("p");
    p2.setAttribute("class", "type");
    var type0 = fetchPokemon.types[0].type.name;
    type0 = type0.replace(type0.charAt(0), type0.charAt(0).toUpperCase());
    if (fetchPokemon.types[1]) {
        var type1 = fetchPokemon.types[1].type.name;
        type1 = type1.replace(type1.charAt(0), type1.charAt(0).toUpperCase());
        var textNode2 = document.createTextNode(type0 + " ," + type1);
    } else {
        var textNode2 = document.createTextNode(type0);
    }
    p2.appendChild(textNode2);
    getDiv.appendChild(p2); //TODO 9
}

async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=21");
    const pokemon = await response.json(); //TODO 1

    for (i=0; i<21; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", pokemon.results[i].name);
        div.setAttribute("class", "pokemon");
        document.getElementById("pokemons").appendChild(div); //TODO 2
        fetchPokemon(pokemon.results[i].url); //TODO 3
    }
}

fetchPokemons()