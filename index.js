// Inquirer import
const inquirer = require('inquirer');

// FS import
const fs = require('fs');

// Shapes import
const {
    Triangle,
    Square,
    Circle
} = require('./lib/shapes');




function userPrompt() {
    inquirer
    .prompt([
        // Text in logo prompt
        {
            type: 'input',
            message: 'What text would you like on your logo?',
            name: 'text'
        },
        // Text color prompt
        {
            type: 'input',
            message: 'What color would you like the text to be? Enter a color keyword (OR a hexadecimal number)',
            name: 'textColor'
        },
        // Choose shape prompt
        {
            type: 'list',
            message: 'Choose a shape for your logo',
            choices: ['Triangle', 'Square', 'Circle'],
            name: 'shape'
        },
        // Shape color prompt
        {
            type: 'input',
            message: 'What color would you like the shape to be? Enter a color keyword (OR a hexadecimal number)',
            name: 'shapeColor'
        }
    ])
    .then((response) => {
        if (response.text.length > 3) {
            console.log('Text must be 3 characters or less');
            userPrompt();
        } else {
            writeFile('logo.svg', response);
        }
    });
}

userPrompt();