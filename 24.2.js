// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}
const pokemon1 = new Pokemon("Pikachu", "yellow", ["at1", "at3", "at4"]);
const pokemon2 = new Pokemon("Squirtle", "blue", ["at2", "at3", "at5"]);
const pokemon3 = new Pokemon("Charmander", "red", ["at1", "at2", "at4"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attackNum) {
  console.log(`${this.name} used ${this.attackList[attackNum]}`);
};

pokemon1.callPokemon();
pokemon2.callPokemon();
pokemon3.callPokemon();

pokemon1.attack(2);
pokemon2.attack(2);
pokemon3.attack(2);
