// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [  
    {
        type: 'input',
        message: 'Please provide the title of your application:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a detailed description of your application:',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'Please provide the steps to install the application:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instruction for use of your application:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines on any contributions made to the application:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide any tests to run your application:',
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
