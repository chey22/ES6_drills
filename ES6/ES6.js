// arrow functions
let favMovie = (name = 'World', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie('Cheyenne', 'Titanic');

let fullName = 'Cheyenne Mangum'

//concise syntax with split string
let getFirstNameConcise = () => console.log(fullName.split(' ')[0])
getFirstNameConcise();

let math = (x, y) => (
    {
        exponent: x ** y,
        product: x * y
    }
)
let result = math(3, 3);
console.log(`${result.exponent}, ${result.product}`)


//spread syntax
let aboutMe = (name, location, favFood) => console.log(`${name}, ${location}, ${favFood}`)

let array = ['Cheyenne', 'Birmingham', 'lasagna'];

aboutMe(...array);

let chey = 'Cheyenne Mangum'

let spread = () => {
    let cheyArray = [...chey]
    for (i = 0; i < chey.length; i++) {
    console.log(cheyArray[i])
    }
};

spread();
