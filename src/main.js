import '../style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


// function sum(a,b){
//   if(typeof a !== 'number' || typeof b !== 'number'){
//     return false;
//   }
//   return a+b;
// }

// console.log(sum(10,20));

let sum = (a,b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return false;
  }
  return a+b;
}

console.log(sum(10,20));

// function show(sanPham){
//   let ketqua = "";
//   if(Array.isArray(sanPham)){
//     for(let i = 0; i < sanPham.length; i++){
//       ketqua+= `${sanPham[i]} `;
//     };
//   } else {
//     return "Dữ liệu không hợp lệ"
//   }
//   return ketqua;
// }

const show = (sanPham) => {
  let ketqua = "";
  if(Array.isArray(sanPham)){
    for(let i = 0; i < sanPham.length; i++){
      ketqua+= `${sanPham[i]} `;
    };
  } else {
    return "Dữ liệu không hợp lệ"
  }
  return ketqua;
}

const sanPham1 = ['ao ba lo', 'ao coc tay', 'ao so mi'];
const chuoi = show(sanPham1);
console.log(chuoi);

//for .... in
for (let index in sanPham1){
  let sp = "";
  sp+= `${sanPham1[index]} -`;
  console.log(sp);
}

//for ... of
let sp1 = "";
for (let item of sanPham1){
  
  sp1+= `${item} + `;
  
}
console.log(sp1);

//forEach
sanPham1.forEach((item, index) => {
  let sp2 = "";
  sp2+= `${item} va ${index}`;
  console.log(sp2);
});



