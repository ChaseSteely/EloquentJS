// chapter 2
let logTriangle = () => {
    for (let i = '#'; i.length <= 8; i += '#')
        console.log(i);
}

logTriangle();

let fizz = () => {
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }
}

fizz();

let fizzBuzz = () => {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

function fizzBuzzTernary() {
    for (let i = 1; i <= 100; i++) {
        let f = i % 3 == 0,
            b = i % 5 == 0;
        console.log(f ? b ? 'FizzBuzz' : 'Fizz' : b ? 'Buzz' : i);
    }
}

fizzBuzzTernary();

let chess = (size) => {
    let board = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                board += ' ';
            } else {
                board += '#';
            }
        }
        board += '\n';
    }
    console.log(board);
}

chess(8);

//Chapter 4

//Sum of Range
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }

  console.log(range(1, 10));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));  console.log(range(5, 2, -1));

//--------------------------------------------------------------

  function range(start, end, step) {
    var rangeArr = [];
    var step = step || 1; // if (step == null) step = 1;
    
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        rangeArr.push(i);
      }
    } else {
      for (var i = start; i >= end; i += step) {
        rangeArr.push(i);
      }
    }
    return rangeArr;
  }
  
  function sum(arr) {
    return arr.reduce((sum, curr) => sum + curr);
  }
  
  console.log(range(1, 10)); 
  console.log(range(1, 10, 2));
  console.log(range(10, 1, -2)); 
  console.log(sum(range(1, 10))); 

  //-------------------------------------------------
  //Reversing an Array

  function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    //for (var i = 0; i < Math.floor(array.length / 2); i++) {
    //loops the array from 0 to the half of the array (rounded to lower number), increases i by one each time.
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
     //var old = array[i];
      //temporarily stores the current value of the array at the position i in the variable old.
      let old = array[i];
      //array[i] = array[array.length - 1 - i];
      //sets the value of the i position to the value of the last element of the array minus the current i.
      array[i] = array[array.length - 1 - i];
      //array[array.length - 1 - i] = old;
      //sets the value of the last element of the array minus the current i to the previous value (stored in the old variable).
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);

  //=-----------------------------

  function reverseArray(arr) {
    if (arr.length == 1) {
      return arr[0];
    }
    return [arr.pop()].concat(reverseArray(arr));
  }
  
  console.log(   reverseArray(["A", "B", "C"])   ); // → ["C", "B", "A"];
  
  
  
  var arrayValue = [1, 2, 3, 4, 5];
  
  function reverseArrayInPlace(arr) {
    for (var i = 0; Math.floor(i < arr.length / 2); i++) {
      var old = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = old;
    }
  }
  // Arrays are objects and they are passed by reference so we can modify them.
  
  reverseArrayInPlace(arrayValue);
  console.log(   arrayValue   ); // → [5, 4, 3, 2, 1]

  //-------------------------------------------------------

  //A List

  function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20

  /*
  Each iteration of the for loop creates a new object with two members, value and rest.
rest is assigned to the value that list had when the object was created (this is the previously created object).
At the end, the last object is returned (the one that had index 0 as the for loop counts backwards).
so if one were to call var bar = arrayToList(foo), then bar would be an object with two members: value and rest, 
value would have the same value as foo[0], rest would be another object (also with two members, value which === foo[1], 
and rest which is another object and so on).
  */

  //----------------------------------------------------------------
//it's just like when you do this
var list = 3;
list = list + 5;  //the new list value becomes the old list value plus five
//==> list = 3 + 5;
//==> list = 8;

//stepping through the values of list for [1, 2, 3]
list = null;
list = {value: 3, rest: null};
list = {value: 2, rest: {value: 3, rest: null}};
list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};

function arrayToList(array){
    var i, temp, list = null;
  
    for (i = array.length - 1; i >= 0; i--) {
      temp = list
      list = {value: array[i], rest: temp};
    }
    return list;
  } 




