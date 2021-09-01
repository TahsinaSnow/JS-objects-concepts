const bottle = {
color: 'yellow',
hold: 'water',
price: 50, 
isCleaned: true
};

//getting all properties names
const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pairs = Object.entries(bottle);


Object.seal(bottle);
Object.freeze(bottle);

bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle);


