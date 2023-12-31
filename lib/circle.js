const Shape = require('./shape');

class Circle extends Shape {
    render(){
        return `<circle cx="100" cy="50" r="80" fill="${this.color}" />`
    }
}

module.exports=Circle;