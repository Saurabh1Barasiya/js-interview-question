// object reference type par work karta h.

function getInfo(member,year){
    member.name = "frontend master";
    year = '1947';
}

const person = {name:'dev'};
const birthYear = '2097';

getInfo(person,birthYear);

console.log(person,birthYear);  // { name: 'frontend master' } 2097