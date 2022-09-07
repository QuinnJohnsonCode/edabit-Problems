function oddishOrEvenish(num) {
	var stringNum = num.toString();
	var sum = 0;
	for(var i = 0; i < stringNum.length; i++) {
	    sum += parseInt(stringNum[i]);
	}
	return (sum % 2 == 0) ? "Evenish" : "Oddish";
}