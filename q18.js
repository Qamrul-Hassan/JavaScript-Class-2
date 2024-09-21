//using push & slice

let numbers = [1, 2, 3];
let merge = numbers.push (4,5,6);
console.log (numbers);
let get = numbers.slice(0,4);
console.log(get);

//using cocat & slice

let no1 = [1, 2, 3];
let no2 = [4, 5, 6];
let mrg = no1.concat(no2);
console.log(mrg);

let gets = mrg.slice(0,4);
console.log(gets);