let sv1 = {
    score: 10,
    name: "NHANDV",
    address: {
        city: "hanoi",
        country: "Vietnam"
    }
}

let sv2 = {
    score: 5,
    name: "Jack",
    address: {
        city: "Paris",
        country: "France"
    }
}
console.log(sv1)
console.log(sv2)

// Add them gioi tinh
sv1.gioitinh = "Nam";
sv2.gioitinh = "Nu";
console.log(sv1)
console.log(sv2)

// remove address
delete sv1.address
delete sv2.address
console.log(sv1)
console.log(sv2)