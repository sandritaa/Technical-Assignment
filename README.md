# Technical-Assignment

Please include a README document that details the input format for your program.
This document will be used by us to create test case data to be used during your interview, so be thorough and precise.
Any failure due to incorrectly documented input formats will be considered as a functional failure of the program when conducting your interview.
Please note that in most cases your program should allow for up to 100 pieces of data to be input simultaneously, and handle that accordingly within your program.
Further details are provided in the Project Requirements.

The input used by the program is an array of objects.

The main function to call is called animal. This accepts one argument which is the array of objects and returns a string which the ouput required for the exercise.

# Input definition
To call the program generate an input which is an array of object. Each object represents an animal and requires 4 fields:
1) name
2) birthday
3) color
4) species

Fields name, color and species are strings and have to be all lower case. The field birthday is a string with the data in the format MM/DD/YYYY

An example for the input is the following

```
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
```

# Calling the program
To call the program, simply call the function animal after having defined the input in the following way:

``` 
let output = animal(input)
```

It is possible to display the output by typing
console.log(output)
