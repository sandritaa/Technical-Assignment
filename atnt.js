//----------------------------------------------------------------------------
// Input format example 
//----------------------------------------------------------------------------


// Create input to test function
input = [];

input[0] = {
    name: 'Hunter',
    birthday: '04/30/1990',
    species: 'cat',
    color: 'white'
}

input[1] = {
    name: 'Lily',
    birthday: '02/16/1982',
    species: 'dog',
    color: 'yellow'
}

input[2] = {
    name: 'Principe',
    birthday: '03/05/1989',
    species: 'sheep',
    color: 'grey'
}

input[3] = {
    name: 'Owen',
    birthday: '12/17/1920',
    species: 'sheep',
    color: 'brown'
}


//----------------------------------------------------------------------------
// Function call example 
//----------------------------------------------------------------------------

let output = animal(input);

console.log(output);


//----------------------------------------------------------------------------
// Define functions
//----------------------------------------------------------------------------

// Core function
function animal(animalData) {

    // Use function to write find most common species
    let mostCommon = findMostCommonSpecies(animalData);

    // Find the oldest animal of the most common species
    let oldestAnimal = findOldest(animalData, mostCommon);

    // Create the output as requested
    let animalSound;
    if (oldestAnimal.species == 'cat') {
        animalSound = "meow";
    } else if (oldestAnimal.species == 'dog') {
        animalSound = "bark";
    } else if (oldestAnimal.species == 'sheep') {
        animalSound = "baa";
    }

    let output = oldestAnimal.name + ', the ' + oldestAnimal.color + ' ' + oldestAnimal.species + ' says ' + animalSound + '!'
    return(output)

}

// Function to find most common species
function findMostCommonSpecies(animalData) {

    let bucketCat = [];
    let bucketDog = [];
    let bucketSheep = [];

    // Populate buckets with elements
    for (let i=0; i<animalData.length; i++) {
        if (animalData[i].species == 'cat'){
            bucketCat.push(i);
        } else if (animalData[i].species == 'dog'){
            bucketDog.push(i);
        } else if (animalData[i].species == 'sheep'){
            bucketSheep.push(i);
        }
    }
    
    // Find largest bucket
    let mostCommon = []
    
    // First compare cats and dogs
    if (bucketCat.length >= bucketDog.length) {
        mostCommon = bucketCat;
    } else if (bucketCat.length < bucketDog.length) {
        mostCommon = bucketDog;
    }

    // Then compare the greater between cats and dogs with sheep
    if (mostCommon.length < bucketSheep.length){
        mostCommon = bucketSheep;
    }

    return mostCommon
    
} 

// Function to find oldest animal
function findOldest(animalData, mostCommon) {
    
    let oldest = mostCommon[0];

    for (let i=1; i<mostCommon.length; i++) {
        let index = mostCommon[i]     

        if (new Date(animalData[index].birthday) < new Date(animalData[oldest].birthday)) {
            oldest = index;
        }
    }

    return animalData[oldest]
}