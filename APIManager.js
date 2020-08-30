//This is the class that will manage all your APIs
class APIManager {
    constructor() {
        this.data = {
            quote: "",
            bacon: "",
            userName: "",
            


        }

    }
    fetchData() {
        $.ajax({
            mehtod: "GET",
            url: "https://api.kanye.rest",
            success: (data) => {
                this.data.quote = data.quote
                console.log(this.data)

            }

        })
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            success: (data) => {
                this.data.bacon = data[0]

            }
        })

        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=6",
            success: (data) => {
                let fullName = data.results.map(fn => `${fn.name.first} ${fn.name.last}`)
                this.data.users = fullName
                console.log(fullName)

            }
        })

        let id = Math.floor(Math.random() * 100 + 1)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
            success: (data) => {
                const name = data.name
                const picUrl = data.sprites.back_default
                this.data.pokemon = { name, picUrl }
                console.log(picUrl)
            }
        })

        
        $.ajax({
            method:"GET",
            url:`https://randomuser.me/api/?results=1`,
            success: (data) => {
                const picture = data.results.map(r => r.picture.large)[0]
                const name = data.results.map(r => `${r.name.title} ${r.name.first } ${r.name.last}` )[0]
                this.data.user = {picture, name}
                console.log(picture)
                console.log(name)
                
                
            }
            
        })
           
    }
}

