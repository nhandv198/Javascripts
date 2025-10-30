let scores = [9, 5, 3, 7, 2, 8, 1];

// console.log(scores, scores.length)
// for (let i = 0; i < scores.length; i++) {
//     console.log("Phần tử thứ ", i, scores[i])
// }
// console.log("********************************")

// //duyet cac phan tu trong array bằng ForEach
// scores.forEach(function (value, index) {
//     console.log("Value =", value, " index=", index)
// })

//Read data
scores.forEach((value, index) => {
    console.log("Value =", value, " index=", index)
})

console.log("********************************")

//Change data 
let scores1 = scores.map((value, index) => {
    // console.log("Value =", value, " index=", index)
    return (value * 2);
})
console.log(scores)
console.log(scores1)