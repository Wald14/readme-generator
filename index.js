// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter project title: ',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter a description of the project: ',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter installation instructions: ',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Enter usage information: ',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines: ',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'Enter test instructions: ',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Pick a license: ',
    name: 'license',
    choices: [
      {name: 'Apache License 2.0', value: 'https://choosealicense.com/licenses/apache-2.0/'},
      {name: 'Boost Software License 1.0', value: 'https://choosealicense.com/licenses/bsl-1.0/'},
      {name: 'GNU AGPLv3', value: 'https://choosealicense.com/licenses/gpl-3.0/'},
      {name: 'GNU GPLv3', value: 'https://choosealicense.com/licenses/gpl-3.0/'},
      {name: 'GNU LGPLv3', value: 'https://choosealicense.com/licenses/lgpl-3.0/'},
      {name: 'MIT License', value: 'https://choosealicense.com/licenses/mit/'},
      {name: 'Mozilla Public License', value: 'https://choosealicense.com/licenses/mpl-2.0/'},
      {name: 'The Unlicense', value: 'https://choosealicense.com/licenses/unlicense/'},
      new inquirer.Separator()
    ]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    fs.writeFile('answers.txt', JSON.stringify(answers), error => {
      if (error) console.log('Error with writing to answers')
    })
  })
}
// Function call to initialize app
init();
