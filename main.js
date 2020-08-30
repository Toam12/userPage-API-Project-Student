const apiManager = new APIManager()
const renderer = new Renderer()


$("#load").on("click",function(){
	apiManager.fetchData()
})

$("#display").on("click",function(){
	renderer.renderAll(apiManager.data)
})
	
	
	