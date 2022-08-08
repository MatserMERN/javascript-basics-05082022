function One(){
    return function two(){
        return function three(){
            return "Three is called"
        }
    }
}

console.log(One()()())

function getMessage(){
    var name = "Scott"
    var setName = function(){
        name ="Great Scott"

        var updateName = function(){
            name ="Great Boss"
        }
        updateName()
    }
    setName()
    console.log(name)
}

getMessage()