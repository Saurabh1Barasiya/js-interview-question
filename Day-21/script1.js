let key = prompt("eneter key");
let value = prompt("enter value");

localStorage.setItem(key,value);

console.log(localStorage.getItem(key));

console.log(localStorage.getItem('poha'));

localStorage.removeItem(key);

localStorage.clear(); // remove all the key value pair.   