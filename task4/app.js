'use strict';

function decending(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  decending(numbers);
  console.log(numbers);

document.body.innerHTML=`Array is : [12, 10, 15, 11, 14, 13, 16] <br> After decending : ${decending(numbers)}`;