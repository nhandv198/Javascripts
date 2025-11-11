let prd1 =
{
    name: "Áo sơ mi",
    Price: 600,
    inStock: false
}

let prd2 =
{
    name: "Áo thun",
    Price: 500,
    inStock: true
}

let prd3 =
{
    name: "Áo Polo",
    Price: 400,
    inStock: true
}

let prd4 =
{
    name: "Áo dài tay",
    Price: 600,
    inStock: false
}

let prd5 =
{
    name: "Áo may ô",
    Price: 100,
    inStock: true
}

let products = [prd1, prd2, prd3, prd4, prd5]
console.log("Tong san pham", products)
console.log("Ten san pha mdau tien: ", prd1.name)

let firstProduct = products[0]
console.log("Ten san pha mdau tien: ", firstProduct.name)


let secondProduct = products[1]
console.log("Before update:", secondProduct.Price)
secondProduct.Price = 20
console.log("Before update:", secondProduct.Price)

//add them prd6
products.push({
    name: "Ao khoac",
    Price: 1000,
    inStock: true
})
console.log("Tong san pham", products)

//delete prd6
products.pop()
console.log("Tong san pham", products)

products.map((item, index) => {
    console.log("products name ", item.name)
})

const priceList = products.map((item, index) => {
    console.log("Price list ", item.Price)

})

//Dung filter lay stock = false
const inStock = products.filter((item, index) => item.inStock === false)
console.log("Products not in stock ", inStock)