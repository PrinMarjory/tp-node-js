//MODULE CONSOLE
//Permet d'afficher les messages dans la console (terminal) pour le débogage et le suivi de l'exécution du programme.

console.log;
console.warn;
console.error;
console.debug;
console.table;

const friend = { firstname: "coco", mail: "coco@mail.fr" };
const { firstname, mail } = friend;

console.log(`${firstname} a ${mail}`);
console.log("Détails de l'objet: %o", friend);

const users = [
    { name: "Alice", age: 23 },
    { name: "Bob", age: 34 },
    { name: "Carol", age: 55 },
];
console.table(users);

console.time('test');
for (let i = 0; i < 1_000_000; i++);
console.timeEnd('test');