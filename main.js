// for loop
console.log("----- For loop ------");
var array = ["Richard","Joe","Lexie"];

for (var i = 0; i< array.length; i++) {
  console.log(array[i]);
}
console.log("------- While ------------");
//while
var j = 0;

while (j<5) {
  console.log("This loop has run " + j + " times");
  j++
}
console.log("------ Do while ---------");

// do while - the loop will always run the code once before checking the condition
var number;
//
do {
  number = Math.random();
  console.log(number);
} while (number < 0.5);

console.log("----- For In -------");
// for in
var myobject = new Object();
//
myobject.a = "1";
myobject.b = "2";
myobject.c = "3";
//
for (var key in myobject) {
  console.log(key);
  console.log(myobject[key]);
}

console.log("------ fizzbuzz challenge -------")
for (var i = 1; i<100; i++) {
  if ((i % 3 === 0) && ( i % 5 === 0) ){
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if ( i % 3 === 0 ) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
