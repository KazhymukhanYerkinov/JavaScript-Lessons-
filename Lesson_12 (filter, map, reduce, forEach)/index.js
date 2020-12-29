const people = [
	{ name: 'Kazhymukhan', age: 25, budget: 40000 },
	{ name: 'Yelaman', age: 17, budget: 3400 },
	{ name: 'Almaz', age: 49, budget: 50000 },
	{ name: 'Yersultan', age: 15, budget: 1800 },
	{ name: 'Azamat', age: 24, budget: 25000 },
	{ name: 'Omirtay', age: 38, budget: 2300 }
]


//===============   for   =================
for (let i = 0; i < people.length; i++) {
	console.log(people[i])
}

for (let person of people) {
	console.log(person)
}

//===============   ForEach   =================
people.forEach(function(person,index, pArr) {
	console.log(person)
	console.log(index)
	console.log(pArr)
})

people.forEach(person => console.log(person));

//===============  Map  =======================
const newPeople = people.map(person => {
	return person.age * 3;
})
console.log(newPeople);

//==============  Filter  =====================
const adults = []
for (let i = 0; i < people.length; i++) {
	if (people[i].age >= 18) {
		adults.push(people[i])
	}
}
console.log(adults);


const adults = people.filter(person => person.age >= 18);
console.log(adults);

//==============  Reduce ======================

let amount = 0;
for (let i = 0; i < people.length; i++) {
	amount += people[i].budget
}
console.log(amount)


const amount = people.reduce((total, person) => total + person.budget, 0);
console.log(amount);

//============== Find ==========================
const kazhy = people.find(person => person.name === 'Kazhymukhan');
console.log(kazhy);

//============= FindIndex =====================
const kazhyIndex = people.findIndexx(person => person.name === 'Kazhymukhan');
console.log(kazhyIndex);



// ==============
const newPeople = people
	  .filter(person => person.budget > 3000)
	  .map(person => {
	  	return {
	  		info: `${person.name} (${person.age})`,
	  		budget: person.budget
	  	}
	  })

console.log(newPeople)
