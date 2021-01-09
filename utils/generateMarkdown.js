// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license) {
        case "GNU AGPLv3":
            return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
        case "GNU GPLv3":
            return "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
        case "GNU LGPLv3":
            return "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
        case "Mozilla Public License 2.0":
            return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
        case "Apache License 2.0":
            return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        case "MIT License":
            return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        case "Boost Software License 1.0":
            return "![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
        case "The Unlicense":
            return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.desc}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation

${data.install}


## Usage

${data.usage}


## Contributing

${data.contribute}


## Tests

${data.tests}


## License

${renderLicenseSection(data.license)}


## Questions

If you have questions take a look at my GitHub

[${data.github}](https://github.com/${data.github})

Or send me an email

[${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
