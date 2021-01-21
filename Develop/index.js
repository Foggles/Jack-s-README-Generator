// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectTitle',
        },

        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'projectDescription',
        },

        {
            type: 'input',
            message: 'What are the installation instructions for your project?',
            name: 'projectInstallation',
        },

        {
            type: 'input',
            message: 'What is the usage information for your project?',
            name: 'projectUsage',
        },

        {
            type: 'input',
            message: 'How could someone contribute to your project?',
            name: 'projectContribution',
        },

        {
            type: 'input',
            message: 'How should someone test your project?',
            name: 'projectTesting',
        },

        {
            type: 'list',
            message: 'What license will your project be under?',
            name: 'projectLicense',
            choices: ['1', '2', '3', '4'],
        },

        {
            type: 'input',
            message: 'What is your GitHub username? (case sensitive)?',
            name: 'gitHubUsername',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'userEmail',
        }
    ]).then((response) => {
        console.log(response);

        const output = `
# ${response.projectTitle}
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${response.projectDescription}

## Installation
${response.projectInstallation}

## Usage
${response.projectUsage}

## License
${response.projectLicense}

## Contribution
${response.projectContribution}

## Testing
${response.projectTesting}

## Questions
GitHub: ${response.gitHubUsername} 
Developer's Email: ${response.userEmail}`;

        fs.writeFile('README.md', output, (err, data) =>
            err ? console.log(err) : console.log("SUCCESS")
        )

    });