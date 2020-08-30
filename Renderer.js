
class Renderer {
	renderAll(data){
		
		this.renderPokemon(data.pokemon)
		this.renderQuote(data.quote)
		this.renderFriends(data.users)
		this.renderUser(data.user)
		
		


	}

	renderPokemon(pokemon){

		const source = $("#pokemon-template").html()
		const template = Handlebars.compile(source)
		let someHTML = template(pokemon)
		$(".pokemon-container").empty().append(someHTML)
	}
	
	renderQuote (quote){
		const source = $("#quote-template").html()
		const template = Handlebars.compile(source)
		let someHTML = template({quote: quote})
		$(".quote-container").empty().append(someHTML)
	}

	renderFriends(users){
		const source = $("#friends-template").html()
		const template = Handlebars.compile(source)
		let someHTML = template({users:users})
		$(".friends-container").empty().append(someHTML)
	}

	renderUser(user){
		const source = $("#user-template").html()
		const template = Handlebars.compile(source)
		let someHTML = template(user)
		$(".user-container").empty().append(someHTML)
	}
	
	
	


}