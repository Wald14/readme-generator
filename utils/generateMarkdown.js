// Title
// Function that returns the title of README, if there is no title, return an empty string
function renderTitle(title) {
  if (title === '') {
    return '';
  } else {
    return `
# ${title}
`;
  }
}

// Licence Badge
// Function that returns a license badge based on which license is passed in, if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `
${license.badge} `;
  }
}

// Table of Contents
// Function that returns the Table of Contents section, if there isn't any info that makes a Table of Centents necessary, don't add table of contents
function renderTableOfContents(data) {
  const installLink = data.install === '' ? '' : '- [Installation](#installation)\n'
  const usageLink = data.usage === '' ? '' : '- [Usage](#usage)\n'
  const licenseLink = data.license === 'none' ? '' : '- [License](#license)\n';
  const contributeLink = data.contribute === '' ? '' : '- [Contribution Info](#contribution)\n';
  const testLink = data.test === '' ? '' : '- [Test](#test)\n';
  const questionsLink = data.email === '' && data.github === '' ? '' : '- [Questions](#questions)\n';
  if (data.install === '' && data.usage === '' && data.license === 'none' && data.contribute === '' && data.test === '' && data.github === '' && data.email === '') {
    return '';
  } else {
    return `
## Table of Contents\n${installLink}${usageLink}${licenseLink}${contributeLink}${testLink}${questionsLink}
  `};
}

// Description
// Function that returns the description section, if there is no installation instructions, return an empty string
function renderDescription(description) {
  if (description === '') {
    return '';
  } else {
    return `
## Description
${description}
`;
  }
}

// Installation
// Function that returns the Installation section of README, if there is no installation instructions, return an empty string
function renderInstallation(install) {
  if (install === '') {
    return '';
  } else {
    return `
## Installation
${install}
`;
  }
}

// Usage
// Function that returns the Usage section of README, if there is no usage info entered, return an empty string
function renderUsage(usage) {
  if (usage === '') {
    return '';
  } else {
    return `
## Usage
${usage}
`;
  }
}

// License
// Function that returns the license section of README, if there is no license, return an empty string
function renderLicense(license) {
  if (license === 'none') {
    return '';
  } else {
    return `
## License
${license.link}
    `;
  }
}

// Contribution
// Function that returns the contribute section of README, if there is no contribute info entered, return an empty string
function renderContribute(contribute) {
  if (contribute === '') {
    return '';
  } else {
    return `
## Contribution Info
${contribute}
`;
  }
}

// Test
// Function that returns the test section of README, if there is no test info entered, return an empty string
function renderTest(test) {
  if (test === '') {
    return '';
  } else {
    return `
## Test
${test}
`;
  }
}

// Questions
// Function that returns the Questions section of README, if there is no github username, return an empty string
function renderQuestions(github, email) {
  if (github === '') {
    return '';
  } else {
    return `
## Questions
- Here is my [github](https://github.com/${github}) account. 
- My email is: ${email}
`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTitle(data.title)}${renderLicenseBadge(data.license)}${renderDescription(data.description)}${renderTableOfContents(data)}${renderInstallation(data.install)}${renderUsage(data.usage)}${renderLicense(data.license)}${renderContribute(data.contribute)}${renderTest(data.test)}${renderQuestions(data.github, data.email)}`;
}

module.exports = generateMarkdown;
