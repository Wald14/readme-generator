// Function that returns the title of README
// If there is no installation instructions, return an empty string
function renderTitle(title) {
  if (title === 'none') {
    return '';
  } else {
    return `
# ${title}
`;
  }
}

// Function that returns the Table of Contents section of README
// TODO: If nothing, don't add table of contents
function renderTableOfContents(data) {
  const installLink = data.install === '' ? '' : '- [Installation](#installation)\n'
  const usageLink = data.usage === '' ? '' : '- [Usage](#usage)\n'
  const licenseLink = data.license === '' ? '' : '- [License](#license)\n';
  const contributeLink = data.contribute === '' ? '' : '- [Contribution Info](#contribution)\n';
  const testLink = data.test === '' ? '' : '- [Test](#test)\n';
  const questionsLink = data.questions === '' ? '' : '- [Questions](#questions)\n';
  if (data.install === '' && data.usage === '' && data.license === '' && data.contribute === '' && data.test === '' && data.questions === '') {
    return '';
  } else {
    return `
## Table of Contents\n${installLink}${usageLink}${licenseLink}${contributeLink}${testLink}${questionsLink}
  `};
}

// Function that returns the description section of README
// If there is no installation instructions, return an empty string
function renderDescription(description) {
  if (description === 'none') {
    return '';
  } else {
    return `
## Description
${description}
`;
  }
}

// Function that returns the Installation section of README
// If there is no installation instructions, return an empty string
function renderInstallation(install) {
  if (install === 'none') {
    return '';
  } else {
    return `
## Installation
${install}
`;
  }
}

// Function that returns the Usage section of README
// If there is no usage info entered, return an empty string
function renderUsage(usage) {
  if (usage === 'none') {
    return '';
  } else {
    return `
## Usage
${usage}
`;
  }
}

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `
${license.badge} `;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
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

// Function that returns the contribute section of README
// If there is no contribute info entered, return an empty string
function renderContribute(contribute) {
  if (contribute === 'none') {
    return '';
  } else {
    return `
## Contribution Info
${contribute}
`;
  }
}

// Function that returns the test section of README
// If there is no test info entered, return an empty string
function renderTest(test) {
  if (test === 'none') {
    return '';
  } else {
    return `
## Test
${test}
`;
  }
}


// Function that returns the Questions section of README
// If there is no github username, return an empty string
function renderQuestions(github, email) {
  if (github === 'none') {
    return '';
  } else {
    return `
## Questions
Here is my [github](https://github.com${github}) account. 
My email is: ${email}
`;
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTitle(data.title)}

  ${renderLicenseBadge(data.license)}

${renderDescription(data.description)}

${renderTableOfContents(data)}

${renderInstallation(data.install)}

${renderUsage(data.usage)}

${renderLicense(data.license)}

${renderContribute(data.contribute)}

${renderTest(data.test)}

${renderQuestions(data.github, data.email)}
`;
}

module.exports = generateMarkdown;
