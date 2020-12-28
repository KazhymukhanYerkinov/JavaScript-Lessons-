function hello() {
	console.log('Hello', this)
}

const person = {
	name: 'Kazhymukhan',
	age: 20,
	sayHello: hello,
	sayHelloWindow: hello.bind(document),
	logInfo: function(job, phone) {
		console.group(`${this.name} info: `);
		console.log(`Name is ${this.name}`);
		console.log(`Age is ${this.age}`);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);

		console.groupEnd();
	}

}

const azamat = {
	name: 'Azamat',
	age: 14
} 

// bind vozvrashaet noviu function, i ego mi vizivaem kogda nam udobna
person.logInfo.bind(azamat, 'Frontend', '87775556699')();

const azaLenInfoLog = person.logInfo.bind(azamat);
azaLenInfoLog('Frontend', '87775556699')

// cal vizivaet srazu
person.logInfo.call(azamat, 'Frontend', '87775556699');


// apply vizivaet srazu, no peredachi parametrov grugie
person.logInfo.apply(azamat, ['Frontend', '87775556699'])


//================================================================

const array = [1,2,3,4,5];

// function multiBy(arr, n) {
// 	return arr.map(function(i) {
// 		return i * n;
// 	})
// }

Array.prototype.multBy = function(n) {
	return this.map(function(i) {
		return i * n;
	})
}

console.log(array.multBy(20))



