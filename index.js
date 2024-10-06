// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function sayHello (name) {
  return `Hello ${name}`
}

const name = prompt ('What is your name?')
const greetings = sayHello(name)
console.log(greetings)