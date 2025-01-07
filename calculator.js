 
 function computeAmount(){
     let sum = 0;
  this.lacs = (v)=>{
     sum += v*100000
     // console.log(sum);
     return this;
  }
  this.crore = (v)=>{
     sum+= v*10000000;
     // console.log(sum);
     return this;
  }
this.thousand = (v)=>{
     sum+= v*1000;
     return this;
}
  this.value = ()=>{
     //   console.log(sum);
       return sum;
  }
 return this;    
}


console.log(computeAmount().lacs(15).crore(2).value());


console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());