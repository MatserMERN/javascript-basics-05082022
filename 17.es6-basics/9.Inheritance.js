class Shape {
    constructor(){
        console.log('Shape class constructor')
    }
    draw(){
        return "I am generic Shape"
    }
}

class Circle extends Shape {
    constructor(){
      super()
      console.log('Circle class constructor')
    }
    draw(){
        return "I am Circle"
    }
}

let circleObj = new Circle()
console.log(circleObj.draw())