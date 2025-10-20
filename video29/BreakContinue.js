//For with break
console.log("Su dung lenh FOR")

for (let i = 1; i < 10; i++) {
    console.log("Hello lan thu:", i)
    if (i===5) { break; }
}


//For with continue
console.log("Su dung lenh FOR")

for (let i = 1; i < 10; i++) {
    
    if (i===5) { continue; 
        //Thoat ra khoi 5 va nhay luon ve 6 (chi thoat ra 1 vong lap )
    }
console.log("Hello lan thu:", i)
}

// //While
// console.log("Su dung lenh While")
// let score=10
// while (score >=1) {
//     console.log ("score value ",score)
//     score--;
// }

// console.log("Su dung lenh DoWhile")
// do {
//     console.log ("score value ",score)
//     score++
// }
// while (score <=10)