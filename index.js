//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
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
      message: 'Instructions for Use',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution - people who contributed ',
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
        choices: ['MIT', 'ISC', 'GNU GPLv3', 'Mozilla','Unlicensed'],
    },
    {   type: 'input',
        name: 'github',
        message: 'What is the repositry name of your current project?',
    },  
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

];
//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
          console.log(err);
      } else {
          console.log('Your README has been created!');
        }
    })
};
// function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(data) { 
  writeToFile('README.md',generateMarkdown(data));
})
};

// Function call to initialize app
init();