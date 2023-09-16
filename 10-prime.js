const t0 = performance.now();
function countPrimeNumbers () {
  const min = 2;
  const max = 100;
  let count = 0;

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      count += 1;
    }
  }
  return count;
}

function isPrime (number) {
  let count = 0;

  if (number === 1) {
    return false;
  }

  for (let i = 0; i * i <= number; i++) {
    if (number % i === 0) {
      count += 2;
    }
  }

  return count === 2;
}

for (let i = 0; i < 100; i++) {
  console.log(countPrimeNumbers());
}

const t1 = performance.now();
console.log('Execution time of printing countPrimeNumbers 100 times was ' + (t1 - t0) + ' milliseconds');
