const data = {
    _animals: ['frog', 'cat', 'cow', 'crocodile', 'monkey', 'bull', 'butterfly', 'dog'],
    _pluralAnimals: ['frogs', 'cats', 'cows', 'crocodiles', 'monkeys', 'bulls', 'butterflies', 'dogs'],
    _buildings: ['house', 'chalet', 'tree-house', 'bungalow', 'yourt', 'tipee', 'mansion'],
    _countries: ['France', 'Germany', 'Japan', 'Canada', 'Argentina', 'Kenya', 'Turkey'],
    _adjectives: ['beautiful', 'horrible', 'abbandoned', 'big', 'luxurious', 'splendid'],
    
    get animals() {
        return this._animals;
    },
    get pluralAnimals() {
        return this._pluralAnimals;
    },
    get buildings() {
        return this._buildings;
    },
    get countries() {
        return this._countries;
    },
    get adjectives() {
        return this._adjectives;
    }
};

const randMessage = () => {

    let chosenBuilding = data.buildings[Math.floor(Math.random() * data.buildings.length)];
    let chosenCountry = data.countries[Math.floor(Math.random() * data.countries.length)];
    let chosenAdjective = data.adjectives[Math.floor(Math.random() * data.adjectives.length)];

    let numberOfAnimals = Math.floor(Math.random() * 6);
    let chosenAnimal = data.animals[Math.floor(Math.random() * data.animals.length)];
    let chosenAnimals = data.pluralAnimals[Math.floor(Math.random() * data.pluralAnimals.length)];

    if (numberOfAnimals <= 1) {
        return `In the future you will live in ${chosenCountry}, in a ${chosenAdjective} ${chosenBuilding} with ${numberOfAnimals} ${chosenAnimal}!`;
    } else {
        return `In the future you will live in ${chosenCountry}, in a ${chosenAdjective} ${chosenBuilding} with ${numberOfAnimals} ${chosenAnimals}!`;
    };
};

console.log(randMessage());