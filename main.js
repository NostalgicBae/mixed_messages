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

    // This function returns a random word stored in the desired array.
    const randWord = pointer => {
        return pointer[Math.floor(Math.random() * pointer.length)];
    };

    // A random number of animals will be assigned to the 'numberOfAnimals' variable.
    let numberOfAnimals = Math.floor(Math.random() * (6 - 1) + 1);

    // This 'if' statement returns a different message based on how many animals are in the 'numberOfAnimals' variable.
    if (numberOfAnimals <= 1) {
        // If there is more than 1 animal the statement will return a random animal from the 'animals' array. 
        return `In the future you will live in ${randWord(data.countries)}, in a ${randWord(data.adjectives)} ${randWord(data.buildings)} with ${numberOfAnimals} ${randWord(data.animals)}!`;
    } else {
        // If there is only one animal the statement will return a random animal from the 'pluraAnimals array.
        return `In the future you will live in ${randWord(data.countries)}, in a ${randWord(data.adjectives)} ${randWord(data.buildings)} with ${numberOfAnimals} ${randWord(data.pluralAnimals)}!`;
    };
};

console.log(randMessage());