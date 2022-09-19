const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

function promptForManager() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter the team Manager's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team Manager's employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team Manager's email address",
    },
    {
      type: "input",
      name: "office",
      message: "Enter the team Manager's office number",
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );

    return manager;
  });
}

function promptForEngineer(engineer) {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter the Engineer's name",
    },
    {
      type: "input",
      name: "EngineerEmployeeId",
      message: "Enter the Engineer's employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the Engineer's email address",
    },
    {
      type: "input",
      name: "github",
      message: "Enter the Engineer's GitHub username",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    return engineer;
  });
}

function promptForIntern(intern) {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter the Intern's name",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the Intern's employee ID",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the Intern's email address",
    },
    {
      type: "input",
      name: "school",
      message: "Enter the Intern's school",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    return intern;
  });
}

function promptForMoreEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Select another type of employee to add",
        choices: ["Engineer", "Intern", "I have no more employees to add"],
      },
    ])
    .then((answers) => {
      return answers;
    });
}

function init() {
  const manager = promptForManager();
  const engineers = [];
  const interns = [];

  let promptForMoreEmployee = true;

  while (promptForMoreEmployee) {
    const selection = promptForMoreEmployee();
    if (selection === "I have no more employees to add") {
      promptForMoreEmployee = false;
    } else if (selection === "Engineer") {
      const engineer = promptForEngineer();
    } else if (selection === "Intern") {
      const intern = promptForIntern();
    }
  }
}

init();
