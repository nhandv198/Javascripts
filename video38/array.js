let names=["Alice", "Bob", "Charlie", "David"];
console.log(names[0]);
console.log(names[2]);
console.log(names[1]);
console.log(names[3]);


// connole.log(names)
// update value in array
names[1]="NHANDV";

console.log(names)

//Add them phan tu vao cuoi mang
names.push(true, 345)
console.log(names)


//Add them phan tu vao cuoi mang
names.unshift(false, 789)
console.log(names)


//Xoa phan tu vao cuoi mang
names.pop()
console.log("Xoa phan tu vao cuoi mang ",names)


//Xoa phan tu dau mang
names.shift()
console.log(names)