function sevenBoom(arr) {
	for(var i = 0; i < arr.length; i++) {
	    if(arr[i].toString().match(/7/)) {
	        return "Boom!";
	    }
	}
	return "there is no 7 in the array";
}