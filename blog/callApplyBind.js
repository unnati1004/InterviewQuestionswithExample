const person = {
  name: "Unnati",
  greet: function (city, country) {
    console.log(`Hello, my name is ${this.name} and I am from ${city}, ${country}.`);
  }
};

const anotherPerson = { name: "Rahul" };

// **Using call** - Pass arguments one by one
person.greet.call(anotherPerson, "Pune", "India");

// **Using apply** - Pass arguments as an array
person.greet.apply(anotherPerson, ["Mumbai", "India"]);

// **Using bind** - Returns a new function with `this` bound, which can be invoked later
const boundFunction = person.greet.bind(anotherPerson, "Bangalore", "India");
boundFunction(); // Executes later


// call: Calls the function immediately and takes arguments one by one.
// apply: Calls the function immediately but takes arguments as an array.
// bind: Returns a new function with this permanently set, which can be called later.