function isPrime(num) {
  if (num <= 1) return "notPrime";
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return "notPrime";
    }
  }
  return "Prime";
}
