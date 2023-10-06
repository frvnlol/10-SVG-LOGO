const inquirer = require('inquirer');
const {join} = require('path');
const fs = require('fs/promises');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const Shape = require('./shape');

class CLI {
  run(){
    let svg = `<svg width="200px" height="100px xmlns="http://www.w3.org/2000/svg"`

    return inquirer
      .prompt([
        {
          type: 'input',
          name:'text',
          message: 'Enter three characters of your choice.: '
        },
        {
          type: 'input',
          name: 'textColorChoice',
          message: 'Enter your desired text color (Can be a hexidecimal number): '
        },
        {
          type: 'list',
          name: 'shapes',
          message: 'Choose a shape: ',
          choices: [
            'Circle',
            'Triangle',
            'Square'
          ]
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter your desired shape color (Can be a hexidecimal number):  '
        }
      ])
      .then((data)=>{
        let shape = new Shape()
      })
  }
}

module.exports = CLI;
