
//remove last element of array
const arr= ['A', 'B', 'C', 'D'];

const eleLast = arr.pop();
console.log(eleLast); 

// push element in array
arr.push('E' , 'F');
console.log(arr);

// add index in front of element
for (var i = 0; i < arr.length; i++)
    { console.log(arr[i]+ '('+ i +')'); }

// mystring

myString= arr.join('-');

//eagle
const eagle = ["stork", "raven", "eagle", "ostrich"];
let index = eagle.indexOf("raven");
console.log(index);

 eBirds=eagle.toString().startsWith("e");
 console.log(eBirds);
