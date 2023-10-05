class Shape{
    constructor(){
        this.color="";
    }
    setColor(color){
        this.color= color;
    }
    render(){
        throw new Error ("Must implepent render() method");
    }
}
module.exports = Shape;