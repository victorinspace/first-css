// JQUERY Examples



// Normal JS
// var button = document.querySelector('#myButton')
// button.addEventListener('click', e => document.querySelector('#myDiv').innerHTML = 'YESSSS')



// Using Jquery
$(document).ready(function() { // manipulate the DOM only after everything is ready
	
	$('#content ul li a').on('click', function() {
		var id = $(this).attr('href') // gives the section id based on what we clicked 

		$('#content ul li a').removeClass('active') // Make sure other elements are not active
		$(this).addClass('active') // Make sure current link is the only active one

		$('#content section').slideUp() // Do this when hiding
		$(id).slideDown() // Do this when showing
	})

})

