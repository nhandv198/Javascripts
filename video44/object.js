let sv1 = {
    score: 10,
    name: "NHANDV"
}

let sv2 = {
    score: 5,
    name: "Jack"
}

let sv3 = {
    score: 1,
    name: "Mai"
}
console.log(sv1)
console.log(sv2)
console.log(sv3)

let students = [sv1, sv2, sv3]
// console.log(">>> ", students);

// **********************************
students.forEach((item, index) => {
    console.log(" >>> ", index, "name =", item.name)
})

// **********************************
// For in
for (let key in sv3) {
    console.log(key, sv3[key]);
}

// **********************************
// For of 1 + 2
for (let value of Object.values(sv1)) {
    console.log(value);
}

for (let value of Object.entries(sv1)) {
    console.log(value);
}
