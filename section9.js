const arr = [1,2,3];
// const [a, b, c] = arr;
// console.log(a,b,c);


// lấy số 1 và số 2
// let [soThuNhat, soThuHai] = arr;
// console.log(soThuNhat, soThuHai);


//Lấy số 1 và số 3
let [soThuNhat, ,soThuHai] = arr;
console.log(soThuNhat, soThuHai);

// let hello = () => { return "Hello World!" };
// console.log(hello());

const nhaHang = {
    diaChi: ['Xuan Phuong', 'Ha Noi', 'Cau Giay'],
    monPhu: ['kem', 'trai cay'],
    monChinh: ['mi xao', 'pho', 'bun cha', 'banh mi'],
    price: ['10$', '$20', '$100'],
    // order: function (khaiVi, chinhThuc, toaDo, gia) {
    //     return [this.monPhu[khaiVi], this.monChinh[chinhThuc], [this.diaChi[toaDo], this.price[gia]]];
    // }

    order: (khaiVi, chinhThuc, toaDo, gia) => {
        return [nhaHang.monPhu[khaiVi], nhaHang.monChinh[chinhThuc], [nhaHang.diaChi[toaDo], nhaHang.price[gia]]];
    }
};

let [mon1, ,mon2] = nhaHang.monChinh;
console.log(mon1, mon2);

//hoán đổi 
[mon1, mon2] = [mon2, mon1];
console.log(mon1, mon2);

//order function
// console.log (nhaHang.order (1,2));
const [x, y] = nhaHang.order(1,3);
console.log(x, y);

// const [a, b, c] = nhaHang.order(1, 2, 2, 2);
// console.log(a, b, c);
// trả về a,b,[c];

const [a, b, [c, d]] = nhaHang.order(1, 2, 2, 2);
console.log(a, b, c, d);
// trả về a,b,c,d