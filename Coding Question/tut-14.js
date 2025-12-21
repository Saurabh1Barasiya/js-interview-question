// import of object.

const obj = {
    name: "saurabh",
    email: "saurabh@gmail.com",
    password: "hello"
}

console.log(obj);  // { name: 'saurabh', email: 'saurabh@gmail.com', password: 'hello' }


console.log(Object.entries(obj));
/*
[
  [ 'name', 'saurabh' ],
  [ 'email', 'saurabh@gmail.com' ],
  [ 'password', 'hello' ]
]
*/

console.log(Object.values(obj))  // [ 'saurabh', 'saurabh@gmail.com', 'hello' ]

console.log(Object.keys(obj));  // [ 'name', 'email', 'password' ]

for (let [key, value] of Object.entries(obj)) {
    console.log(`key is ${key} and value is ${value}`);
}


// key is name and value is saurabh
// key is email and value is saurabh@gmail.com
// key is password and value is hello

console.log('---------------------------------------');

for (let value of Object.values(obj)) {
    console.log(`value is ${value}`);
}


/*
value is saurabh
value is saurabh@gmail.com
value is hello
*/


for (let key of Object.keys(obj)) {
    console.log(`key is ${key}`);
}


/*
    key is name
    key is email
    key is password
*/