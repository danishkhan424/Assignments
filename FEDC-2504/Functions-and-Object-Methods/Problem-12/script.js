const greetUser = function() {
    let name = prompt("Please enter your name:");
  
    name = (name && name.trim() !== "") ? name : "Guest"; 
  
    alert("Hello, " + name + "!");
  };
  
  greetUser();
  