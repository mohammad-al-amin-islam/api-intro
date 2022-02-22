const user = {
    name: 'alamin',
    age : 23,
    work :'student'
}
console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);

const storeDetails = {
    name:'variety store',
    revenue : 2300,
    isExpensive : false,
    owner :{
        name:'xyz',
        age:24
    }
}
const storeStringified = JSON.stringify(storeDetails);
console.log(storeStringified);
const converted = JSON.parse(storeStringified);
console.log(converted.owner);
