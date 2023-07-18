// Shape class
class Shape {
    constructor() {
        this.color='';
    }
}
// Circle class inherits Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}
// Triangle class inherits Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
// Square class inherits Shape
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };