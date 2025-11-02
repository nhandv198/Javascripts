let scores = [9, 5, 3, 7, 2, 8, 1];
const scores1 = scores.filter((item, index) => {
    return item >= 5;
});

const scores2 = scores.filter((item, index) => {
    return item < 5;
});

console.log(scores)
console.log(scores1)
console.log(scores2)