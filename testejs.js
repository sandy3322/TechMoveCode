var ar = [1, 3, 5, 8, 56];
for (var i = 0, total = 0; i < ar.length; total += ar[i++]);
console.log(total)