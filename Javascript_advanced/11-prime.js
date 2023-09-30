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

let counter = 0;
if (counter < 100) {
  setTimeout(console.log(countPrimeNumbers()), 0);
  counter++;
}

const t1 = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (t1 - t0) + ' milliseconds');
