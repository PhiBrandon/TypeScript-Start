class SweetSweetBasil {
	color: string
	name: string
	constructor(name:string, startColor:string) {
		this.color = startColor
		this.name = name
	}

	getColor() {
		console.log(this.color)
	}

	getName(){
		console.log(this.name)
	}

	toString(){
		let final_string = "Your name is: " + this.name + " and your favorite color is " + this.color
		console.log(final_string)
	}
}

let name1 = "Jake"
let basil = new SweetSweetBasil(name1, "purple")

console.log(basil.color)

class Basil extends SweetSweetBasil {
	constructor(name:string, startColor:string) {
		super(name, startColor)
	}
	setNewColor(newColor:string){
		this.color = newColor
	}
}

let basil3 = new Basil("John", "Red")
basil3.getColor()
basil3.getName()
basil3.toString()
basil3.setNewColor("Orange")
basil3.toString()

let hello:string = "Hello Friend"
//This is a way to declare any type 
let num:number = 123

function f(input: boolean){
	let a = 100
	if(input){
		let b = a + 200
		return b
	}
	return a
}

console.log(f(true))
console.log(f(false))