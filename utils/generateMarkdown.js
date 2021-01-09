// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
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

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, linkContent) {
    let link;
    switch (license) {
        case "GNU AGPLv3":
            link = "https://www.gnu.org/licenses/agpl-3.0";
            break;
        case "GNU GPLv3":
            link = "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "GNU LGPLv3":
            link = "https://www.gnu.org/licenses/lgpl-3.0";
            break;
        case "Mozilla Public License 2.0":
            link = "https://opensource.org/licenses/MPL-2.0";
            break;
        case "Apache License 2.0":
            link = "https://opensource.org/licenses/Apache-2.0";
            break;
        case "MIT License":
            link = "https://opensource.org/licenses/MIT";
            break;
        case "Boost Software License 1.0":
            link = "https://www.boost.org/LICENSE_1_0.txt";
            break;
        case "The Unlicense":
            link = "http://unlicense.org/";
            break;
        default:
            link = "";
    }
    return `[${linkContent}](${link})`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseDescription;
    switch (license) {
        case "GNU AGPLv3":
            licenseDescription = "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.";
            break;
        case "GNU GPLv3":
            licenseDescription = "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.";
            break;
        case "GNU LGPLv3":
            licenseDescription = "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.";
            break;
        case "Mozilla Public License 2.0":
            licenseDescription = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";
            break;
        case "Apache License 2.0":
            licenseDescription = "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
            break;
        case "MIT License":
            licenseDescription = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
            break;
        case "Boost Software License 1.0":
            licenseDescription = "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
            break;
        case "The Unlicense":
            licenseDescription = "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.";
            break;
        default:
            licenseDescription =  "";
    }

    return `${renderLicenseLink(license, license)}\n\n${licenseDescription}`;
}

// Generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseLink(data.license, renderLicenseBadge(data.license))}

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

${data.test}


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
