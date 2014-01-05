function mergesort(a) {
  var n = a.length;
  if (n<=1) return a; //smallest subarr
  var m = Math.floor(n/2); //mid
  var left = mergesort(a.slice(0,m)); 
  var right = mergesort(a.slice(m)); 
  return merge(left,right);
}

function merge(l,r) {
  var i = 0, j = 0; k = 0;
  var ans = [];
  while ((i < l.length) && (j < r.length)) {
    ans[k++] = (l[i] < r[j]) ? l[i++] : r[j++];
  }
  while (i < l.length) { 
    ans[k++] = l[i++];
  }
  while (j < r.length) { 
    ans[k++] = r[j++];
  }
  console.log("ans:",ans);
  return ans;
}

console.log(mergesort([1,5,6,2,7,8,4,3,9]));
console.log(mergesort([3,4,2,1,7,5,8,9,0,6]));
