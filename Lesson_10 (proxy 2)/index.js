// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
	return new Proxy(target, {
		get: (obj, prop) => (prop in obj ? obj[prop]:defaultValue)
	})
}

const position = withDefaultValue({
	x: 24,
	y: 42
}, 0)


// Hidden properies
const withHiddenProps = (target, prefix = '_') => {
	return new Proxy(target, {
		has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
		ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
		get: (obj, prop, receiver) => (prop in receiver)
			? obj[prop]
			: undefined
	})
} 
const data = withHiddenProps({
	name: 'Kazhymukhan',
	age: 25,
	_uid: '1234432'
})

// Optimization


// const index = {}
// userData.forEach(i => (index[i.id] = i))

const IndexedArray = new Proxy(Array, {
	construct(target, [args]) {
		const index = {}
		args.forEach(item => (index[item.id] = item))

		return new Proxy(new target(...args), {
			get(arr, prop) {
				switch(prop) {
					case 'push': 
						return item => {
							index[item.id] = item
							arr[prop].call(arr, item)
						}
					case 'findById':
						return id => index[id]
					default:
						return arr[prop]
				}
			}
		})
	}
});

const users = new IndexedArray([
	{id: 1, name: 'Kazhymukhan', job: 'Frontend', age: 20},
	{id: 2, name: 'Almaz', job: 'Backend', age: 18},
	{id: 3, name: 'Yersultan', job: 'Frontend', age: 17},
	{id: 4, name: 'Erzhan', job: 'Product Manager', age: 20},
])
