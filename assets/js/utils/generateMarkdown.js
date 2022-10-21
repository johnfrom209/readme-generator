const badgeArray = [
  'Apache 2.0',
  "GNU v3.0",
  "MIT",
  "BSD 2-Clause",
  "Boost Software 1.0",
  "Creative Commons Zero v1",
  "Eclipse Public License",
  "BSD 3-New",
  "GNU Affero",
  "GNU General",
  "GNU Lesser",
  "Mozilla",
  "The Unlicense"]
const badgeUrl = [
  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
  '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
  '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
  '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
  '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  else if (badgeArray.includes(license)) {
    let index = badgeArray.indexOf(license);
    //  renderLicenseLink(badgeUrl[index]);
    return badgeUrl[index];
  }
  else {
    return "License not found"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  else if (badgeArray.includes(license)) {
    let index = badgeArray.indexOf(license);
    return badgeUrl[index];
  }
  else {
    return "License link not found"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [License](#license)
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Useage
  ${data.useage}
  ## Contribute
  ${data.contribute}
  ## Test
  ${data.test}
  ## License
  The license used for this project is ${data.license}. Get more information by checking out the repo.
`;
}

module.exports = generateMarkdown;
