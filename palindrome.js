// // Palindrome Number
// function Palindrome(data){
     
//     let a = String(data).split("");
//      // console.log(a);
//      let j = a.length-1;
//      for(let i=0; i<a.length; i++){
//        if(a[i] == a[j]){       
//           j--;
//        }
//        else{
//           return false;
//        }
//      }

//      return true;
// }

// let data = 121;

// let value = Palindrome(data);
// console.log(value)

// Fibnocci Number
// series -> 0,1,1,2,3,5,8,13,21,34     
// const Fibnocci=(n)=>{
//   if(n < 1){
//      return 
//   } 
//   let prev = 1;
//   let prev2 = 0;
   
//   console.log(prev2+" ");
  
//   if(n == 1) return;
  
//   console.log(prev+ " ");
  
//   for(let i = 3;i<n;i++){
//      let curr = prev + prev2;
//      prev2 = prev;
//      prev = curr
//      console.log(curr+" ");
     
//   }


// }
// let n = 5
//  Fibnocci(1);
// console.log(res)

// Recursion 

// const fib = function(n){
//      if(n<=1) return n;

//      return fib(n-1)+fib(n-2);

// }

// console.log(fib(3));

// Valid Anagram

// function Anagram(s,t){
  
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");

//   return s === t;
// }


// let s = "angara";
// let t = "nagaram"

// let v = Anagram(s,t)
// console.log(v);

// function Angaram1(s,t){
//    let obj1 = {}
//    let obj2 = {}

//    for(let i = 0;i<s.length;i++){
//      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//    }
//    console.log(obj1,obj2);
   
//    for(const key in obj1){
     
//       if(obj1[key] !== obj2[key]) return false;
//      }
//      return true;
// }

// console.log(Angaram1("angaram","nagaram"))

// Flatten Array

// function Flatten(arr){
//      // const a = [1,2,3,[4,[5,6]],7,8];
//      let arr1 = [];
//    for(let i =0;i<arr.length;i++){
//      if(Array.isArray(arr[i])){
//       arr1.push(...Flatten(arr[i]));  
//      }
//      else if(!Array.isArray(arr[i])){
//        arr1.push(arr[i])   
//      }
//    }  
//    return arr1
// }
// const arr = [[[1]],2,3,[4,[5,6]],7,8];
// console.log(Flatten(arr));

// Two Sum

let nums = [2,7,5,11]
let target = 9;

// function TwoSum(nums,target){
//      let j = 1;
//   for(let i =0;i<nums.length;i++){
//      if(nums[i]+nums[j] == target){
//         return [i,j]
//      }
//      j++;
//   }   
// }

// With Object
// function TwoSum(nums,target){
//    let obj = {};
   
//    for(let i =0;i<nums.length;i++){
//      let n = nums[i]
//      if(obj[target-n]>=0){
//        return [obj[target-n],i];   
//      }
//      else{
//           obj[n] = i;
//      }
//    }
   
// }

//  console.log(TwoSum(nums,target));

// Best time to buy and sell the stock 

let prices = [7,1,5,3,6,4]

function Sellstock(prices){
   let currentprofit = 0;
   let globalProfit = 0;  
   let j = 1;
  for(let i=0;i<prices.length;i++){
     currentprofit = prices[j]-prices[i];
       j++;
     if(currentprofit>globalProfit){
           globalProfit = currentprofit;
     }
  } 
  return globalProfit;
}
console.log(Sellstock(prices))