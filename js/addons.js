$(document).ready(function() {
	$('#myCarousel').carousel({
		interval: 20000
	})

	$( "#photo-one" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/1.png">');
		$('#product-image').addClass('active-thumbnails');
	});
	$( "#photo-two" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/2.png">');
		$('#product-image').addClass('active-thumbnails');
	});
	$( "#photo-three" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/3.png">');
		$('#product-image').addClass('active-thumbnails');
	});
	$( "#photo-four" ).click(function() {
		$('#product-image').html('<img class="product-image" src="product-images/4.png">');
		$('#product-image').addClass('active-thumbnails');
	});

});
