var arr = [1,1,2,3,5,8,13,21];

var i = 0;
var sum = 0;

while (i < arr.length) { 
	
	sum += arr[i]; 
	i++; 
}

for (i = 0, product = 1; i < arr.length; i +=2) {
	
	product *= arr[i]; 
}

console.log(sum);
console.log(product);