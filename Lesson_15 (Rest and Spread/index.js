const citiesKazakhstan = ['Shymkent', 'Almaty', 'Astana','Oral'];
const citiesEurope = ['Berlin', 'Paris', 'Rome', 'Praha'];

const citiesKazakhstanWithPopulation = {
	Shymkent: 20,
	Almaty: 30,
	Astana: 15,
	Oral: 25,
}

const citiesEuropeWithPopulation = {
	Shymkent: 26,
	Berlin: 10,
	Praha: 3,
	Paris: 2
}

// Spread

const allCities = [...citiesKazakhstan, 'Nur-sultan', ...citiesEurope];
consy allCities = citiesEurope.concat(citiesKazakhstan)
console.log(allCities)

console.log({...citiesKazakhstanWithPopulation})
console.log({...citiesKazakhstanWithPopulation, ...citiesEuropeWithPopulation})


//========================================
const numbers = [5, 37, 42, 17];
console.log(Math.max(5,37,42,17))
console.log(Math.max(...numbers))

console.log(Math.max.apply(null, numbers))

const divs = document.querySelectorAll('div');
const nodes = [...divs]
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))

// Rest
function sum(a, b, ...rest) {
	return a + b + rest.reduce((a, i) => a + i, 0)
}
const numbers = [1,2,3,4,5,6,7,8]

console.log(sum(...numbers))

const a = numbers[0];
const b = numbers[1];

const [a,b, ...other] = numbers

console.log(a, b, other)

const person = {
	name: 'Max',
	age: 20,
	city: 'Moscow',
	country: 'Russia'
}

const { name, age, ...adress } = person;
console.log(name, age, adress)



