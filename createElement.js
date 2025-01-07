// Please create a function model(state,element), to bind state.value to the HTMLInputElement element

const input = document.getElementById("input");
const state = { value: "Hi" };
// input.add
function model(state, input) {
  //code here
  Object.defineProperty(state,'value', {
    get() {
      return input.value;
    },
    set(i) {
     //  this.value = i;
     if(input.value != newvalue){
          input.value = i;
     }
      return;
    },
  });
  input.addEventListener('change',function(e){
     const newvalue = e.target.value;
     state.value = newvalue;
  })
}

model(state, input);
console.log(input.value);

state.value = "dev";
console.log(input.value);

// input.value = 'engineering'
