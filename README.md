# OverloadJS

	function Example() {
		this._funzione= {
			"empty": ()=> {
				console.log("I'm a no parameter overload!")
			},
			"string": (myString)=> {
				console.log("I have a string parameter: " + myString)
			},
			"string": (myNum)=> {
				console.log("I have a number parameter: " + myNum)
			},
			"string_Object": (myString, myObj)=> {
				console.log("I have a string and an Object as parameters!");
			}
		}

		this.Overload.apply("funzione", this._funzione)
		this.funzione= function(){
			this.Overload.callback("funzione", arguments, this)
		}
	}
	(new Example()).funzione();
