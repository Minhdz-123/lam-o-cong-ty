import html from "./core";
const cars = ['BMW', 'Porsche', 'Mercedes']

const output = `
    <h1></h1>
    <ul>
        ${cars.map((car) => `<li>${car}</li>`)}
    </ul>
`

console.log(output);