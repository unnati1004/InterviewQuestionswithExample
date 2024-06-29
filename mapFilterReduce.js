// map,filter and reduce

// what is map()?

const nums = [1,2,3,4];

const multiplyThree = nums.map((num,i,arr)=>{
          return num *3 + i;
})

console.log(multiplyThree);

// what is filter
// filter method take each elemet in an array and it applies a conditional statement againsst it 
// if the condtion return true element get push into the output array 
// if the condition element false element does not get push into the output array
// in short filter return only those element sfrom the array which fullfil the provided criteria 

// example
  
const nums1 = [1,2,3,4];
const moreThanTwo = nums.filter((nums)=>{
          return nums>2;
})
console.log(moreThanTwo);


// what is reduce 
// method reduces an array of values down to just one value jiust like map and filter 
// reduce also executes callback for each element of the array so it receives two things 
// example
// it has one accumulator , current value, index and array.
// accumulator is the initial value we provided after callback function.
const nums2 = [1,2,3,4];
const sum = nums.reduce((acc,curr,i,arr)=>{
    return acc + curr;
},0) 

console.log(sum);

// pollyfill for map()

Array.prototype.myMap = function (cb) {
   let temp = [];
   for (let i=0;i<this.length;i++){
      temp.push(cb(this[i],i,this))    
   }       

   return temp;
}

// example
const nums4 = [1,2,3,4];

const multiplyThree1 = nums.myMap((num,i,arr)=>{
          return num *3 + i;
})

console.log(multiplyThree1);

// polyfill for filter

Array.prototype.myFilter = function (cb){
   let temp = [];
   for (let i = 0; i < this.length; i++) {
          if(cb(this[i],i,arr)){
             temp.push(this[i]);       
          }
      return temp;    
   }       
}

// pollyfill for reducer

Array.prototype.myReduce = function(cb,initialValue){
    accumulator = initialValue;      
    for (let i = 0; i < this.length; i++) {
          accumulator = accumulator?cb(accumulator,this[i],i,this): this[i];
    }

    return accumulator;
}


// Questions 1. map vs foreach 

// this both are array function to loop through the item of the array
const arr = [2,5,3,4,7];

//1. map return new array but forEach modify original array
//2. you can chain stuff on map but as we know foreach modify original array
//3. but with foreach it doesn't return any array so we can chain other methods

const mapResult = arr.map((ar)=>{
   return ar + 2;       
})
console.log(mapResult);

const forEachResult = arr.forEach((ar,i)=>{
     ar[i] = ar + 3;     
})
console.log(forEachResult);

// map,filter and reduce - o/p Based Question
// Q.1 

let Student = [
   {name:"Piyush",rollNumber:31, marks: 37},       
   {name:"unnati",rollNumber:51, marks: 80},       
   {name:"Ritika",rollNumber:1, marks: 49},       
   {name:"Ritu",rollNumber:1, marks: 25}       
]
// with for loop
let names = [];
for(let k =0;k<Student.length;k++){
   names.push(Student[k].name.toUpperCase());       
}
console.log(names);

// with map
let names1 = Student.map((obj)=>{
       return obj.name.toUpperCase();   
});
console.log(names1);

//Q.2 Return only details of those who scored more than 60

const details = Student.filter((stu)=> stu.marks>60)
console.log(details);

//Q.3 More than 60 marks and rollNumber greater than 15
const detail1 = Student.filter((stu)=>stu.marks>60 && stu.rollNumber>15);
console.log(detail1);

//Q.4 Sum of marks of all Student 

const Sum = Student.reduce((acc,curr)=>acc+curr.marks,0)
console.log(Sum);

// Q.5 Return only names of Student who scored more than 60.

const names3 = Student.filter((stu)=> stu.marks > 60).map((stu)=>stu.name);
console.log(names3); 

// Q.6 Return total marks for students  with marks greater than 60 
//after 20 marks have been added to those who scored less than 60    

const totalMarks = Student.map((stu)=>{
   if(stu.marks<60){
     stu.marks +=20;     
   }       
   return stu;
}).filter((stu)=>stu.marks > 60);

console.log(totalMarks);

