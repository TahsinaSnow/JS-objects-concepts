const first = {a: 1, b: 2};
const second = {a: 2, b: 1};

const third = first;


if(first === third ){
    console.log('objects are equal');
}
else{
    console.log('objects are different');
}


console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

const first2 = {b: 1, a: 2};
const second2 = {b: 2, a: 1};
if(JSON.stringify(first) === JSON.strringify(second)){

}

function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    
    for(const prop in obj1){
        if(obj1 [prop] !== obj2 [prop]){
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(fist2, second2);

console.log(isEqual);
