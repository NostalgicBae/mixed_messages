// This object stores all the data
const data = {
    _animals: ['frog', 'cat', 'cow', 'crocodile', 'monkey', 'bull', 'butterfly', 'dog'],
    _pluralAnimals: ['frogs', 'cats', 'cows', 'crocodiles', 'monkeys', 'bulls', 'butterflies', 'dogs'],
    _buildings: ['house', 'chalet', 'tree-house', 'bungalow', 'yourt', 'tipee', 'mansion'],
    _countries: ['France', 'Germany', 'Japan', 'Canada', 'Argentina', 'Kenya', 'Turkey'],
    _adjectives: ['beautiful', 'horrible', 'ruined', 'big', 'luxurious', 'splendid'],
    
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

// This function returns a predetermined message with random data from the 'data' object.
const randMessage = () => {

    // Here, we assign randomly selected data from our 'data' object and assign it to variables.
    let chosenBuilding = data.buildings[Math.floor(Math.random() * data.buildings.length)];
    let chosenCountry = data.countries[Math.floor(Math.random() * data.countries.length)];
    let chosenAdjective = data.adjectives[Math.floor(Math.random() * data.adjectives.length)];
    let chosenAnimal = data.animals[Math.floor(Math.random() * data.animals.length)];
    let chosenAnimals = data.pluralAnimals[Math.floor(Math.random() * data.pluralAnimals.length)];

    // A random number of animals will be assigned to the 'numberOfAnimals' variable.
    let numberOfAnimals = Math.floor(Math.random() * 6);

    // This 'if' statement returns a different message based on how many animals are in the 'numberOfAnimals' variable.
    if (numberOfAnimals <= 1) {
        // If there is more than 1 animal the statement will return a random animal from 'chosenAnimals'. 
        return `In the future you will live in ${chosenCountry}, in a ${chosenAdjective} ${chosenBuilding} with ${numberOfAnimals} ${chosenAnimal}!`;
    } else {
        // If there is only one animal the statement will return a random animal from 'choseAnimal.
        return `In the future you will live in ${chosenCountry}, in a ${chosenAdjective} ${chosenBuilding} with ${numberOfAnimals} ${chosenAnimals}!`;
    };
};

console.log(randMessage());