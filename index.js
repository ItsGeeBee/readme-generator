// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the repositry name of your current project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Breif description on your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Instructions for installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license to apply?',
        choices: ['MIT', 'ISC', 'GNU GPLv3'],
    },
    {
        type: 'list',
        name: 'email',
        message: 'What is your email address?',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Your README has been created!');
        }
    })
};


// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions);

}

// Function call to initialize app
init();