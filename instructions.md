# Instructions  

  Let's combine what we have learnt .


## Steps
1. Create function `sayHello` with one argument `name`
2. In the function body, return a formatted string:
```javascript
`Hello ${name}!`
```
3. Create variable `name` and assign `prompt` function with prompt `'What is your name? '`
4. Create variable `greetings` and assign to function `sayHello` with argument `name`.
5. Console log `greetings` and run the code. When prompted the question, input Haris
6. It should look like this:
```
What is your name? > Haris
Hello Haris!
```
**Take note:**

`Haris` after `What is your name? ` is manually typed, not part of the prompt of the `prompt` function

<details>
<summary>Full Code</summary>

```javascript
function sayHello(name) {
  return `Hello ${name}!`;
}

const name = prompt('What is your name? ');
const greetings = sayHello(name);
console.log(greetings);
```
</details>


---