function checkPrime(num) {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count += 1;
    }
  }
  console.log(count > 0 ? "Not a Prime Number" : "Prime Number");
}
checkPrime(13);