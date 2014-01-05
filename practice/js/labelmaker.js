
function ifactorial(n) {
  //if (n==0 || n==1) {return 1};
  var product=1;
  for (var i = 2; i <= n; i++) {
    product*=i;
  }
  return product;
}

function nCk(n,k) {
  return ifactorial(n) / ifactorial(k) / ifactorial(n-k);
}

function nPk(n,k) {
  return ifactorial(n) / ifactorial(n-k);
}

/*
// test ifactorial
for (var i = 0; i <= 10; i++) {
  console.log(ifactorial(i));
};

// test nPk
for (var i = 1; i <= 3; i++) {
  console.log(nPk(3,i));
};
*/

/* calculate for each letter, how many possibilities */
/*
console.log(Math.pow(3,1)); // first letter
console.log(Math.pow(3,2)); // second letter
console.log(Math.pow(3,3)); // third letter
*/

function print_last_label(l,n) {
  var len = l.length;
  var index;
  var i=0;

  // find out how many characters
  while (n > 0) {
    index=n;
    n-=Math.pow(len,++i);
  };

  var charr = []; // return value

  for (i=i-1; i >= 0; i--) {
    // =mod(floor(($F1-1)/pow(3,1),1),3)
    charr.push(l[Math.floor((index-1)/Math.pow(len,i)) % len]);
  };

  return charr.join('');

}

console.log('Case #1: ', print_last_label("EHT",34));
console.log('Case #2: ', print_last_label("ABCEFKO",4296473));
console.log('Case #3: ', print_last_label("ACEHKMPRTU",4125383079316));
console.log('Case #4: ', print_last_label("CDEGHIKLOSUWY",8333092520403744490));
console.log('Case #5: ', print_last_label("ADEFHNOPSUVY",3365973428406169086));
