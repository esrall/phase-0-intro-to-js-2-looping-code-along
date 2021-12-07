// Code your solutions in this file
const names = ["Guadalupe", "Samip", "Aki"]

function writeCards() {
    let i = 0; while (i < names.length) {
        console.log(`Thank you, ${names[i]} for the wonderful surprise gift!`);
        i++;
    }
}

writeCards(names);

function countDown () {
    for(let countup = 0; countup <11; countup++)
    console.log(countup);
}