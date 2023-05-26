function byteSize(str){
  // write your code here
  return Buffer.byteLength(str, 'utf8'); 
};
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
