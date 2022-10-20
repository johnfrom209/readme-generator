// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Enter the title of your project",
        name: 'title'
    },
    {
        message: "Give a description of your project",
        name: 'description'
    },
    {
        message: "Give instructions on how to install your project",
        name: 'install'
    },
    {
        message: "Usage information",
        name: 'useage'
    },
    {
        message: "How can people help contribute to your project?",
        name: 'contribute'
    },
    {
        message: "How to test",
        name: 'test'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
