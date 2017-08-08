function isPrime (n) {  
  for (var i = 2; i <= Math.sqrt(n); i++) {  
    if (n % i == 0) {  
      return false;  
    }  
  }  
  return true;  
}

function PrimeFactorizer(n) {  
  let hash = [];
  let initialValue = n;
  if (n == 1) {
    hash.push(1);
  }  
  while (n > 1) {  
    for (let i = 2; i <= n; i++) {  
      if (isPrime(i) && n % i == 0) {  
        hash.push(i);
        n /= i;  
      }  
    }  
  }  
  hash.sort((a, b) => a - b);
  hash = hash.join(` * `);
  hash = `${initialValue} = `.concat(hash);
  return hash; 
}  

console.log(PrimeFactorizer(1));
console.log(PrimeFactorizer(4));
console.log(PrimeFactorizer(23));
console.log(PrimeFactorizer(60));
console.log(PrimeFactorizer(90));
console.log(PrimeFactorizer(131));