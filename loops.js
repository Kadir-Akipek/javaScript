for (let i = 0; i <= 5; i++) {
    console.log(`${i} + ${i} = ${i + i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(countries)

let i = 0
while (i <= 5) {
    console.log(i)
    i++
    if (i == 3) {
        break //or continue
    }
}

let j = 4
do {
    j++
    console.log(j)
} while (j <= 4);

const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log(num * num)
}

const webTechs = ["html", "css", "javascript"]
for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}