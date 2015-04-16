$(document).ready(function() {
	$('#myCarousel').carousel({
		interval: 20000
	})

	$( "#photo-one" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/1.png">');
	});
	$( "#photo-three" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/3.png">');
	});
	$( "#photo-four" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/4.png">');
	});

});
