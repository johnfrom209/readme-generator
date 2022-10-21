// TODO Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
const { title } = require('process');

// TODO Create an array of questions for user input
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
        message: "How can someone test your program?",
        name: 'test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: [
            'Apache 2.0',
            "GNU v3.0",
            "MIT",
            "BSD 2-Clause",
            "Boost Software 1.0",
            "Creative Commons Zero v1",
            "Eclipse Public License",
            "BSD 3-New",
            "GNU Affero",
            "GNU General",
            "GNU Lesser",
            "Mozilla",
            "The Unlicense"],
        inital: 1
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //call to generate content on readme file
    fileName = generateMarkdown(data)

    //creates the file with the contents of fileName
    fs.writeFile('GENERATED-README.md', fileName, (err) =>
        err ? console.log(err) : console.log('Successfully created GENERATED-README.me!')
    );
}

// TODO Create a function to initialize app
function init() {
    // use inquirer to ask prompts
    inquirer
        .prompt(questions)
        // use the answers 
        .then((answers) => {
            // why send the file name? this is for the badge isn't it
            const fileName = "GENERATE-README";
            const readmeContent = writeToFile(fileName, answers)
        });
}

// Function call to initialize app
init();
