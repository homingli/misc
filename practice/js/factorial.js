
//recursion

function rfactorial(n) {
  if (isNaN(n) || n < 0) return -1;
  if (n == 1 || n == 0) {
    return 1;
  }
  return rfactorial(n-1)*n;
}

function ifactorial(n) {
  if (isNaN(n) || n < 0) return -1;
  if (n == 0) {
    return 1;
  }
  var ans = 1;
  for (n; n > 0; n--) {
    ans *= n;
  }
  return ans;

}

console.log(rfactorial(process.argv[2]));
console.log(ifactorial(process.argv[2]));

function nCk(n,k) {
  return ifactorial(n) / ifactorial(n-k) / ifactorial(k);
}

console.log(nCk(process.argv[2],process.argv[3]));
