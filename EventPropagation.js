//Q1. Event Propagation in javascript 

// when and which direction the event will be executed is called Event Proapagation.

//Q2. What is Event Bubbling
// In Bubbling the event are executed bottomup first button then form and then div

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click",function(){
          alert("div")
})
form.addEventListener("click",function(){
          alert("form")
})
button.addEventListener("click",function(){
          alert("button")
})

//Que 3. Event.target vs this.target vs event.currentTarget

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

div.addEventListener("click",func)
form.addEventListener("click",func)
button.addEventListener("click",func)

function func(event){
   alert("currentTarget" + event.currentTarget.tagName +
   ",Target" + event.target.tagName + ",this" + this.tagName
)
}

// What is Event Capturing / Trickling?

div.addEventListener("click",function(){
          alert("div")
})
form.addEventListener("click",function(){
          alert("form")
})
button.addEventListener("click",function(){
          alert("button")
})

// How to stopPropagation ?

div.addEventListener("click",function(){
          e.stopPropagation();
          alert("div")
})
form.addEventListener("click",function(){
          e.stopPropagation();
          alert("form")
})
button.addEventListener("click",function(e){
       e.stopPropagation();   
          alert("button")
})

