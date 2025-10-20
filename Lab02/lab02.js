console.log("LAB 02")
// let toan = window.prompt("Hãy nhập điểm môn toan");
// let van = window.prompt("Hãy nhập điểm môn văn");
// let ngoaingu = window.prompt("Hãy nhập điểm môn ngoại ngữ");

const toan = 4
const van = 5
const ngoaingu = 5

let dtb = trungbinh(toan, van, ngoaingu);

xeploai(dtb)

function trungbinh(a, b, c) {
    return (a + b + c) / 3;
}

function xeploai(diem) {
    if (dtb >= 9) {
        console.log("DTB ", dtb, "xuat sac");
    }
    else if (dtb >= 8 && dtb < 9) {
        console.log("DTB ", dtb, "gioi");
    }
       else if (dtb >= 6.5 && dtb < 8) {
        console.log("DTB ", dtb, "kha");
    }
       else if (dtb >= 5 && dtb < 6.5) {
        console.log("DTB ", dtb, "trung binh");
    }
       else if ( dtb < 5) {
        console.log("DTB ", dtb, "kem");
    }
}
