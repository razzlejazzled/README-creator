// array of questions for user
const questions = [
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
        message: "What is the license for this project?",
        choices: "MIT", "Other",
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
        type: "what email address would you like to associate with this project?",
        name: "email"
    }


];

// function to write README file
function writeToFile("ReadME.me", data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
