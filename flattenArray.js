const a = [1,2,3,[4,[5,6]],7,8];

let b = [];
function flattenArray(a){
 for(let i =0;i<a.length;i++){
   if( Array.isArray(a[i])){
     flattenArray(a[i])
   }
   else {
     b.push(a[i]);
   }
 }
return b
}
const result = flattenArray(a);
console.log(result);