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
        if(typeof this.methods[name] != "undefined") // se esistono dei record overloadati
        this.methods[name].forEach((el)=>{ // scorre methods e fa i dovuti controlli
            if(JSON.stringify(el[1]) == JSON.stringify(this.convertInTypeof(param)))
                fn = el[0]
        })
        return fn.apply(that,param) // return della callback della funzione che viene eseguita nell'oggetto chiamante
    }
    convertInTypeof(container){
        let newContainer = []
        if(container instanceof Object) //controllo per oggetto non nullo
            for(let i=0; i< container.length; i++)  // scorro tutto il container
                if(typeof container[i] == "object") newContainer.push(container[i].constructor.name) // se il tipo è object mette il nome del costruttore
                else newContainer.push(typeof container[i]) // altrimenti il tipo
        return newContainer;
    }
    apply(name, advancedObj){
        let sup; // variabile d'appoggio
        Object.keys(advancedObj).forEach((item)=> {
            this.add(name, advancedObj[item], (sup=item.split("_"))[0]=="empty"?[]:sup) // addizione di ogni metodo con lo stesso nome
        })
    }
} Object.prototype.Overload = new Overload()