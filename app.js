console.log("insidejavescritp")
var words = ["citizen","administator","religion"];
for (var i=0; i<words.length; i++) {
	console.log(words[i])
}
var counter = 0;
$('button').on('click', function() {
	$('#word').text(words[counter])	
	if (counter==words.length) {
		counter = 0 
	}
	else {
		counter++
	}
})

