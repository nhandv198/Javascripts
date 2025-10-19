let age = window.prompt("Hãy nhập tuỏi của bạn");
// let FullName = window.prompt("Hãy nhập tên của bạn");
if (age >= 18) {
    console.log("You are an adult.");
}

else if  (age >=16 && age <18) {
    console.log("You are a teen.");
}
else if  (age >0 && age <16) {
    console.log("You are a kid.");
}

else {
    console.log("You are a old.");
}