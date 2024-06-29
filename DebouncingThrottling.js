// Debouncing and Throttling in Javascript
// Ques 1 - Create a button UI and add Debounce as follows=>
// --> Show "Button Pressed <x> Times "every time buttonis pressed
// --> Increase "Triggered <y> Times" count after 800ms of debounce

{/* <button>Increment</button>
<p>Button Pressed <span>0</span>Times</p>
<p>Triggered<span>0</span>Times</p> */}

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_btn");
const count = document.querySelector(".increment_btn");

var pressedCount = 0;
var triggeredCount = 0;

btn.addEventListener('click',()=>{
   btnPress.innerHTML = ++pressedCount;  
   count.innerHTML = ++triggeredCount; 
});




