// function to generate markdown for README
function generateMarkdown({title, description, install, usage, license, contribution, testing, email, username}) {
  return `# ${title}
  
    ${title}

   ## Description:
    ${description}

  ![License](https://img.shields.io/badge/License-${license}-blue.svg)

  # Table of Contents:
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
    
   ## Installation:
   > ${install}

   ## Usage:
   > ${usage}

   ## License:
   > ${license}
   
   Click on the link to get more information on the license!

   > [License Info](#https://opensource.org/licenses/${license})

   ## Contributing:
   > ${contribution}

   ## Tests:
   > ${testing}

   ## Questions:

   > If you have any questions, please email me at ${email} or message my github profile: [${username}](https://github.com/${username})
    

`;
}

module.exports = generateMarkdown;
