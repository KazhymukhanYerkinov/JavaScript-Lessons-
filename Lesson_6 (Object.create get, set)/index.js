const person = Object.create(
	{
		calculateAge() {
			console.log('Age: ', new Date().getFullYear() - this.birthYear);
		}
	},
	{
		name: {
			value: 'Kazhymukhan',
			enumerable: true, // formen otkende key arkili ala alasin
			writable: true, // ozgerte alasin
			configurable: true // delete ete alasin
		},

		birthYear: {
			value: 1993,
			enumerable: false,
			writable: false,
			configurable: false
		},

		age: {
			get() {
				return new Date().getFullYear() = this.birthYear
			},

			set(value) {
				document.body.style.background = 'red';
				console.log('Set age: ', value);
			}
		}
	}
)

for (let key in person) {
	if (person.hasOwnProperty(key)) {
		console.log('Key', key, person[key])
	}
	
}