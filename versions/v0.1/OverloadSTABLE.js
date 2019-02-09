class Overload {
    static add(name, fn, param) {
        if(typeof Overload.methods[name]== "undefined") Overload.methods[name]=[]
        //if
        Overload.methods[name].push([fn, param])
    }
    static call(name, param, that){
        let fn = null
        console.log(`Arguments: Saved | To Find`)
        if(typeof Overload.methods[name] != "undefined")
        Overload.methods[name].forEach((el)=>{
            if(JSON.stringify(el[1]) == JSON.stringify(Overload.convertInTypeof(param)))
                fn = el[0]
            console.log(`${JSON.stringify(el[1])} | ${JSON.stringify(Overload.convertInTypeof(param))}`)
        })
        console.log(`\nFunction: ${fn}`)
        console.log(`Overload number: ${Overload.methods[name].length}`)
        return fn.apply(that,param)
    }
    static convertInTypeof(container){
        let newContainer = []

        if(container instanceof Object) 
            for(let i=0; i< container.length; i++) 
                if(typeof container[i] == "object") newContainer.push(container[i].constructor.name)
                else newContainer.push(typeof container[i])
        
        return newContainer;
    }
    static applyOverload(name, advancedObj){
        advancedObj.function.forEach(function(el, i) {
            Overload.add(name, el, advancedObj.format[i])
        })
    }
} Overload.methods = {}
/*
function swag (){
    this._meth0 = function(){
        console.log("dick")
    }
    this._meth1 = function(mcnugget, swagOBJ){
        console.log(mcnugget+"ghereghegay")
    }
    Overload.applyOverload("meth",{"function":[this._meth0,this._meth1],"format":[[],["string","swag"]]})
    this.meth = function(){
        Overload.call("meth",arguments,this)
    }
}
(new swag()).meth("",new swag())*/