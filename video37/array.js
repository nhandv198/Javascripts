let names=["Alice", "Bob", "Charlie", "David"];
console.log(names[0]);
console.log(names[2]);
console.log(names[1]);

// forEach
names.forEach(function(name, index) {
    console.log(`Index: ${index}, Name: ${name}`);
});

let hoas=["Rose", "Tulip", "Daisy", "Sunflower"];
console.log("Original array:", hoas);
