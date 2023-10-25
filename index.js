// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter project title: ',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter a short description of the project:',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'install'
  },
  {
    type: 'input',
    message: 'Enter usage information:',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines:',
    name: 'contribute'
  },
  {
    type: 'input',
    message: 'Enter test instructions:',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Pick a license:',
    name: 'license',
    choices: [
      {
        name: 'Apache License 2.0',
        value: {
          link: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
          badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        }
      },
      {
        name: 'Boost Software License 1.0',
        value: {
          link: '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)',
          badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        }
      },
      {
        name: 'GNU AGPLv3',
        value: {
          link: '[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0)',
          badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      }
      },
      {
        name: 'GNU GPLv3',
        value: {
          link: '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
          badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      }
      },
      {
        name: 'GNU LGPLv3',
        value: {
          link: '[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0)',
          badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
      }
      },
      {
        name: 'MIT License',
        value: {
          link:'[MIT](hhttps://opensource.org/license/mit/)',
          badge:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      }
      },
      {
        name: 'Mozilla Public License 2.0',
        value: {
          link: '[Mozilla Public License](https://opensource.org/licenses/MPL-2.0)',
          badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      }
      },
      {
        name: 'None',
        value: 'none'
      },
      new inquirer.Separator()
    ]
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
];


// Function that writes to README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (error) => {
    if (error) console.log("Error with writing to file")
  })
}

// Function that while initialize the app
function init() {
  console.log("Answer the following questions to generate your new README.md file. If you don't need a section, leave it blank and it won't be added to the README")
  inquirer.prompt(questions).then(answers => {
    let info = generateMarkdown(answers);
    writeToFile("./new_readme/newREADME.md", info)
    console.log('Your starting README file has been made. It can be found in the "new_readme" folder and is labeled "README.md". As you develop your web application, make sure to continue to expand the README.md file in the appropriate sections.')
  })

};

init();