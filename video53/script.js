console.log("Video 53")
const element1 = document.getElementById("btn1")
const element2 = document.getElementById("btn2")
const text = document.getElementById("mytext")

console.log(element1, text)
element1.addEventListener("click", function () {
    text.style.color = "red"
    text.style.backgroundColor = "green"
    text.innerText = "Video 53 Click "
})

element2.addEventListener("click", function () {
    text.style.color = "black"
    text.style.backgroundColor = "white"
})
