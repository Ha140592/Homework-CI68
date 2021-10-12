
function toFix(numb, index) {
let str = numb.toString();
let indexDot = str.indexOf(".") ;
let newNumb = Number(str.substring(0, indexDot + index + 1));
return newNumb
}
console.log(toFix(3.14444444, 2));
console.log(toFix(4.14444444, 4));
console.log(toFix(7/6, 2));
