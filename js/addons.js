$(document).ready(function() {
	$('#myCarousel').carousel({
		interval: 20000
	})

	$( "#photo-one" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/1.jpg">');
	});
	$( "#photo-two" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/2.jpg">');
	});
	$( "#photo-three" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/3.jpg">');
	});
	$( "#photo-four" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/4.jpg">');
	});

});
