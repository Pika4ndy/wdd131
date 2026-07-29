let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter((name) => name.startsWith('B'));
console.log(`names starting with 'B': ${namesB}`);

let namesLength = names.map((name) => name.length);
console.log(`Array with length of each names: ${namesLength}`);

let lengthAverage = namesLength.reduce((sum, length) => sum + length, 0) / namesLength.length;
console.log(`the average length of the names is: ${lengthAverage}`);

document.getElementById('original-array').textContent = names.join(', ');
document.querySelector('#filter p').innerHTML = namesB.join(', ');
document.querySelector('#map p').innerHTML = namesLength.join(', ');
document.querySelector('#reduce p').innerHTML = lengthAverage;