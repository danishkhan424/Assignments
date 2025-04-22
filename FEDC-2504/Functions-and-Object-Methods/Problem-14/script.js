function calculatePrice(){
  let price, discount;
  while(true){let input = prompt("Enter the price and discount (separated by a comma):");

  if (input === null) {
    alert("Cancelled.");
    return;
  }
  [price, discount = 10] = input.split(",").map(Number);

  if(isNaN(price) || isNaN(discount) || price < 0){
    alert("Invalid input. Please enter a positive price and a non-negative discount.");
  }else{
    break;
  }
}
  let finalPrice = price - (price * discount / 100);
  alert("Final Price after discount: ₹" + finalPrice.toFixed(2));
}

calculatePrice()