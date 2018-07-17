/*********************
	POST 		// CREATE 
	GET 		// READ 
	PUT 		// UPDATE
	DELETE 	// DELETE
*********************/

$(function(){
	$('#swapiform').on('submit', function(e) {
		e.preventDefault()

		var search = $('#swapisearch').val()

		if (search.length > 0) {
			$.get('https://swapi.co/api/people/?search=' + search, function(data) {
				var html = data.results.map(person => {
					name: ${[person.name}
					birth.year: ${person.birth_year}
					gender: ${person.gender}
					url: ${person.url}
				})
				
			})
		}
	})
})