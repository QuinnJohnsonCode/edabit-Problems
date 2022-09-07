function countBoomerangs(arr) {
  var count = 0;
	for(var i = 1; i < arr.length - 1; i++) {
	    if(arr[i - 1] === arr[i + 1] && arr[i] !== arr[i - 1]) {
	        count++;
	    }
	}
	return count;
}