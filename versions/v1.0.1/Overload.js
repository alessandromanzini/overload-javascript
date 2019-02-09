class Overload {
    constructor(){
        this.methods = {}
    }
    add(name, fn, param) {
        if(typeof this.methods[name]== "undefined") this.methods[name]=[] //creazione vettore per metodi overloadati
        this.methods[name].forEach((el,i)=>{ //sovrascrizione metodi
            if(JSON.stringify(el[1]) == JSON.stringify(param))
                this.methods[name].splice(i,1)
        })
        this.methods[name].push([fn, param])
    }
    callback(name, param, that){
        let fn = null
        console.log(`Arguments: Saved | To Find`)
        if(typeof this.methods[name] != "undefined")
        this.methods[name].forEach((el)=>{
            if(JSON.stringify(el[1]) == JSON.stringify(this.convertInTypeof(param)))
                fn = el[0]
            console.log(`${JSON.stringify(el[1])} | ${JSON.stringify(this.convertInTypeof(param))}`)
        })
        console.log(`\nFunction: ${fn}`)
        console.log(`Overload number: ${this.methods[name].length}`)
        return fn.apply(that,param)
    }
    convertInTypeof(container){
        let newContainer = []
        if(container instanceof Object) 
            for(let i=0; i< container.length; i++) 
                if(typeof container[i] == "object") newContainer.push(container[i].constructor.name)
                else newContainer.push(typeof container[i])
        
        return newContainer;
    }
    apply(name, advancedObj){
        advancedObj.function.forEach((el, i)=> {
            this.add(name, el, advancedObj.format[i])
        })
    }
} Object.prototype.Overload = new Overload()


/*
function Example() {
    this._funzione= function(){
        return {
            "function":[
            function(){
                console.log("Sono un overload vuoto!")
            },
            function(baluba){
                console.log("Sono un overload con la stringa  " + baluba)
            }],
            "format":[
                [],
                ["string"]
            ]
        }
    }
    
    this.Overload.apply("funzione", this._funzione())
    this.funzione= function(){
        this.Overload.callback("funzione", arguments, this)
    }
}

(new Example()).funzione("  perrotti");*/