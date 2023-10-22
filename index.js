// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter project title: ',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter a short description of the project: ',
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
    name: 'constibute'
  },
  {
    type: 'input',
    message: 'Enter test instructions: ',
    name: 'tests'
  },
  {
    type: 'list',
    message: 'Pick a license: ',
    name: 'license',
    choices: [
      {
        name: 'Apache License 2.0',
        value: 'https://choosealicense.com/licenses/apache-2.0/'
      },
      {
        name: 'Boost Software License 1.0',
        value: 'https://choosealicense.com/licenses/bsl-1.0/'
      },
      {
        name: 'GNU AGPLv3',
        value: '[GNU AGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
      },
      {
        name: 'GNU GPLv3',
        value: '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
      },
      {
        name: 'GNU LGPLv3',
        value: '[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)'
      },
      {
        name: 'MIT License',
        value: '[MIT](https://choosealicense.com/licenses/mit/)'
      },
      {
        name: 'Mozilla Public License',
        value: '[Mozilla Public License](https://choosealicense.com/licenses/mpl-2.0/)'
      },
      {
        name: 'The Unlicense',
        value: 'https://choosealicense.com/licenses/unlicense/'
      },
      new inquirer.Separator()
    ]
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    let info = generateMarkdown(answers)
    console.log(info)
  })

};

// Function call to initialize app
init();