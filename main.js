// strings, numbers, boolean, null, undefined

/* const name = "John";
const age = 30;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z); */

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
]
//console.log(todos[1].text)

//const toJSON = JSON.stringify(todos);
//console.log(toJSON);

/*for(let i = 0; i < 10; i++) {
    console.log(`to add label: ${i}`);
}*/

/*for(let i = 0; i < 10; i++){
    console.log(i)
}*/

/* while

let i = 0;
while(i < 10) {
    console.log(`While loop Number: ${i}`);
    i++;
}*/

// forEach, map, filter

//highorder arrays

/* while(true){
    console.log('inside loop')
};*/

/*const fruits = ['mango', 'orange', 'grapes']

let i=0;
while(i<= 2) {
console.log(fruits[i])
i = i+1;
}


i=0;
while(i < fruits.length) {
console.log(fruits[i])
i = i+1;
} */

const input = 10;
let star = ['*', '**', '***', '****', '*****'];
// console.log(star[0]);
// console.log(star[1]);
// console.log(star[2]);
// console.log(star[3]);
// console.log(star[4]);

// i = 0;
// while(i <= 5) {
//     console.log(star[i])
//     i = i+1
// }

i=0 //starting point of loop
while(i <= input) { // (i <= 4) is a condition it will check the variable i is less than equal to 4
console.log(star[i]) // print variable star as per i 
i = i+1 // adds + 1 to i
}