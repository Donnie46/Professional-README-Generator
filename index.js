// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [  
    {
        type: 'input',
        message: 'What is the title for the README file?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description for the README file?',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'What are the steps to install the README file?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instrucions for the usage of the README file.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide any test to be run here.',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.promises.writeFile(fileName, data)
    .then(response => {
        console.log('done')
    })
}

// TODO: Create a function to initialize app // asks questions
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            const readmeData = generateMarkdown(response) 
            writeToFile('dist/README.md', readmeData)
        }) 
    }

// Function call to initialize app
init();
