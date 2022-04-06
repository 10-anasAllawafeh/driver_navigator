`use strict`

function upperCase(str) {
    let array=str.split(" ");
    let array2=[];
    for (let i = 0; i < array.length; i++) {
        array2.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    
    }
 return array2.join(" ")   
}
console.log(upperCase(`the car drove fast`));
document.body.innerHTML=`Before : the car drove fast <br> After: ${upperCase(`the car drove fast`)}`;
