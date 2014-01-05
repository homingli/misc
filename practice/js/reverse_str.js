
function reverse(str) {

  var revstr = [];

    for (var i=0; i < str.length ; i++) {
      revstr.push(str[str.length-1-i]);
    }

    return revstr.join('');
}

function rev_inplace(str) {
  // since javascript str are immutable, pretend revstr is passed (by splitting)
  var revstr = str.split('');
  var mid = Math.floor(str.length / 2) - 1;

  for ( var i = 0 ; i <= mid; i++ ) {
    // swap left and right
    var tmp = revstr[i];
    revstr[i] = revstr[str.length-1-i];
    revstr[str.length-1-i] = tmp;
  }

  return revstr.join('');
}

console.log(reverse(process.argv[2]));
console.log(rev_inplace(process.argv[2]));
