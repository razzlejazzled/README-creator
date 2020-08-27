// function to generate markdown for README
function generateMarkdown({title, description, install, usage, license, contribution, testing, email, username}) {
  return `# ${title}
  
    ${title}

    Description:
    ${description}

    Table of Contents:
        Description
        Installation
        Usage
        License
        Contributing
        Tests
        Questions
    
    Installation:
    ${install}

    Usage:
    ${usage}

    License:
    ${license}

    Contributing:
    ${contribution}

    Tests:
    ${testing}

    Questions:

    If you have any questions, please email me at ${email} or message my github profile: ${username}
    

`;
}

module.exports = generateMarkdown;
