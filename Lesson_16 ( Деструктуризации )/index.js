function calcValues (a,b) {
	return [
		a + b,
		undefined,
		a * b,
		a / b
	]
}

const [ sum, sub = 'Here is empty', mult, ...other] = calcValues(42, 10);
const sum = result[0];
const sub = result[1];

const [sum, sub] = result;

console.log(sum, mult, other, sub);

//=====================================================

const person = {
	name: 'Max',
	age: 20,
	address: {
		country: 'Russia',
		city: 'Moscow'
	}
}

const { name, age, car = 'No car', address: {country, city} } = person;

const { name, ...info } = person

console.log(name, info)

// =======================================================

function logPerson({ name, age }) {
	console.log(name + " " + age)
}

logPerson(person)