const d = document
const excuse = d.getElementById('excuse')
const button = d.getElementById('button')
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let generateExcuse = () => {
    let newExcuse = `${who[getRandomInt(who.length)]} ${action[getRandomInt(action.length)]} ${what[getRandomInt(what.length)]} ${when[getRandomInt(when.length)]}`
    excuse.innerText = newExcuse
}
button.addEventListener('click', generateExcuse)