function mediamChar(string){
let str=string.toLowerCase();
const array= str.replaceAll(" ","").split("");
const medianIndex=(array.length)/2 -1 ;
array.sort()
console.log(array[medianIndex]);
}
mediamChar("qU esT io n " )
