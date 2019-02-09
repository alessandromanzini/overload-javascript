# OverloadJS

function Example() {
    this._funzione= {
        "empty": ()=> {
            console.log("Sono un overload vuoto!")
        },
        "string": (baluba)=> {
            console.log("Sono un overload con la stringa " + baluba)
        },
        "string_Object": (baluba, fonta)=> {
            console.log("mattarella "+fonta.message);
        }
    }
    
    this.Overload.apply("funzione", this._funzione)
    this.funzione= function(){
        this.Overload.callback("funzione", arguments, this)
    }
}

(new Example()).funzione();
