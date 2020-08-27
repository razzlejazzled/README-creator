const inquirer = require("inquirer");
const fs = require("fs");
const util =  require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please briefly describe the project:",
        name: "description",
    },
    {
        type: "input",
        message: "How does one install this project?",
        name: "install",
    },
    {
        type: "input",
        message: "What is the usage of this project?",
        name: "usage",
    },
    {
        type: "checkbox",
        message:"What is the license for this project?",
        choices: ["MIT", "Apache", "GPL", "Other"],
        name: "license",
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "testing",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "what email address would you like to associate with this project?",
        name: "email"
    }


]);
}
// function to initialize program
async function init() {
    console.log("async")
    try {
        const answers = await promptUser();
        const README = generateMarkdown(answers);
        await writeFileAsync("./results/Readme.md", README);
        console.log("Successfully wrote to README.md");
    } catch(err){
        console.log(err);
    }
}

// function call to initialize program
init();
