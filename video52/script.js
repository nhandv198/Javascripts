console.log("Video 52")
const element1 = document.getElementById("btn1")
const element2 = document.getElementById("btn2")
const text = document.getElementById("mytext")
console.log(element1, text)
element1.addEventListener("click", function () {
    text.innerHTML = "<h3>Click Video 52</h3>"
})

element2.addEventListener("click", function () {
    // alert("Change old text")
    text.innerHTML = "<h1>Video 52</h1>"
})
