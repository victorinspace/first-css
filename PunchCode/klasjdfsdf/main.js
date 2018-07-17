const main = document.querySelector("#content")


const etsyItems = items.map(funciton (item) {
	return 
	`
	<a class = "priduct" href="${unescapeitem.url}"> // put backslashes in 
		<img src="placeholder/200/200" alt="placeholder">
		<span class="title">${item.title}</span>
		<span class="price">${item.price.toFixed(2)}</span>
	</a>
	`
})