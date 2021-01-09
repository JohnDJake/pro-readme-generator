// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { title } = require("process");

// Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
}, {
    type: "editor",
    name: "desc",
    message: answers => `Describe ${answers.title}`
}, {
    type: "editor",
    name: "install",
    message: answers => `How do you install ${answers.title}?`
}, {
    type: "editor",
    name: "usage",
    message: answers => `How do you use ${answers.title}?`
}, {
    type: "editor",
    name: "contribute",
    message: answers => `How do you contribute to ${answers.title}?`
}, {
    type: "editor",
    name: "test",
    message: answers => `How do you test ${answers.title}?`
}, {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
}, {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
}, {
    type: "input",
    name: "email",
    message: "What is your email?"
}];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.error(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => writeToFile(`README_${response.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`, response));
}

// Function call to initialize app
init();
