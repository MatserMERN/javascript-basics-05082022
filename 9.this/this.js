console.log(this)

function sample(){
    console.log(this)
}

sample()

var obj = {
    name: "Scott",
    getName: function(){
        console.log(this)
    }
}

obj.getName()