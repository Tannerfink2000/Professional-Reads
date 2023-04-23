// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md file generated!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const { title, description, installation, usage, license, contributing, tests, github, email } = responses;
    
        const README = `
    # ${title}
    
    ## Description
    ${description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}
    
    ## License
    This project is covered under the ${license} license.
    
    ## Contributing
    ${contributing}
    
    ## Tests
    ${tests}
    
    ## Questions
    If you have any questions, please reach out to me at ${email}. You can also check out my other projects on [GitHub](https://github.com/${github}).
        `;
    
        writeToFile('README.md', README);
      });
}

// Function call to initialize app
init();
