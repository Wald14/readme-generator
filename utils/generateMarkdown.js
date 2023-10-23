// Function that returns the Table of Contents section of README
// TODO: If nothing, don't add table of contents
function renderTableOfContents(data) {
  const installLink = data.install === '' ? '' : '- [Installation](#installation)\n'
  const usageLink = data.usage === '' ? '' : '- [Usage](#usage)\n'
  const licenseLink = data.license === '' ? '' : '- [License](#license)\n';

  return `
## Table of Contents\n${installLink}${usageLink}${licenseLink}
  `;
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
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `
## License
${license.link}
    `;
  }
}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}${renderLicenseBadge(data.license)}

## Description
${data.description}

${renderTableOfContents(data)}

${renderInstallation(data.install)}

## Usage
${data.usage}

## Credits
${renderLicenseSection(data.license)}

## How to contribute
${data.constibute}

## Tests
${data.tests}

`;
}

module.exports = generateMarkdown;
