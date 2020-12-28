console.log('Start 1');

console.log('Start 2');

function timeout2sec() {
	console.log('timeout2sec');
}

window.setTimeout(function() {
	console.log('Inside timeout, after 5000 seconds')
}, 5000);

setTimeout(timeout2sec, 2000);
console.log('End')

// =====> latentflip.com