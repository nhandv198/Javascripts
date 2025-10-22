console.log("LAB 02")
let toan = Number(window.prompt("Hãy nhập điểm môn toan"));
let van = Number(window.prompt("Hãy nhập điểm môn văn"));
let ngoaingu = Number(window.prompt("Hãy nhập điểm môn ngoại ngữ"));

// const toan = 4
// const van = 5
// const ngoaingu = 5

let dtb = trungbinh(toan, van, ngoaingu);

xeploai(dtb)

function trungbinh(a, b, c) {
    return (a + b + c) / 3;
}

function xeploai(diem) {
    if (diem >= 9) {
        console.log("DTB ", diem, "xuat sac");
    }
    else if (diem >= 8 && diem < 9) {
        console.log("DTB ", diem, "gioi");
    }
       else if (diem >= 6.5 && diem < 8) {
        console.log("DTB ", diem, "kha");
    }
       else if (diem >= 5 && diem < 6.5) {
        console.log("DTB ", diem, "trung binh");
    }
       else if ( diem < 5) {
        console.log("DTB ", diem, "kem");
    }
}
