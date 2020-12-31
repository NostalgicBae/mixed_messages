const animals = ['frog', 'cat', 'cow', 'crocodile', 'monkey', 'bull', 'butterfly', 'dog'];
const pluralAnimals = ['frogs', 'cats', 'cows', 'crocodiles', 'monkeys', 'bulls', 'butterflies', 'dogs']
const buildings = ['house', 'chalet', 'tree-house', 'bungalow', 'yourt', 'tipee', 'mansion'];
const countries = ['France', 'Germany', 'Japan', 'Canada', 'Argentina', 'Kenya', 'Turkey'];
const adjectives = ['beautiful', 'horrible', 'abbandoned', 'big', 'luxurious', 'splendid']

const randMessage = () => {

    let chosenBuilding = buildings[Math.floor(Math.random() * buildings.length)];
    let chosenCountry = countries[Math.floor(Math.random() * countries.length)];
    let chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    let numberOfAnimals = Math.floor(Math.random() * 6);
    let chosenAnimal = animals[Math.floor(Math.random() * animals.length)];
    let chosenAnimals = pluralAnimals[Math.floor(Math.random() * pluralAnimals.length)];

    if (numberOfAnimals <= 1) {
        return `In the future you will live in ${chosenCountry}, in a ${chosenAdjective} ${chosenBuilding} with ${numberOfAnimals} ${chosenAnimal}!`
    } else {
        return `In the future you will live in ${chosenCountry}, in a ${chosenAdjective} ${chosenBuilding} with ${numberOfAnimals} ${chosenAnimals}!`
    };
};

console.log(randMessage());