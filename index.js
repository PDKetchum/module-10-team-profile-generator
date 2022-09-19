const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

async function promptForManager() {
  return inquirer.prompt([
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
      name: "officeNumber",
      message: "Enter the team Manager's office number",
    },
  ]);
}

async function promptForEngineer(engineer) {
  return inquirer.prompt([
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
  ]);
}

async function promptForIntern(intern) {
  return inquirer.prompt([
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
  ]);
}

async function promptForMoreEmployee() {
  return inquirer.prompt([
    {
      type: "list",
      name: "selection",
      message: "Select another type of employee to add",
      choices: ["Engineer", "Intern", "No more employees"],
    },
  ]);
}

async function init() {
  const managerAnswer = await promptForManager();
  const manager = new Manager(
    managerAnswer.name,
    managerAnswer.id,
    managerAnswer.email,
    managerAnswer.officeNumber
  );

  const engineers = [];
  const interns = [];

  let hasMoreEmployee = true;

  console.log("Im Here");

  while (hasMoreEmployee) {
    const selectionAnswer = await promptForMoreEmployee();
    if (selectionAnswer.selection === "No more employees") {
      hasMoreEmployee = false;
    } else if (selectionAnswer.selection === "Engineer") {
      const engineerAnswer = await promptForEngineer();
      const engineer = new Engineer(
        engineerAnswer.name,
        engineerAnswer.id,
        engineerAnswer.email,
        engineerAnswer.github
      );
    } else if (selectionAnswer.selection === "Intern") {
      const internAnswer = await promptForIntern();
      const intern = new Intern(
        internAnswer.name,
        internAnswer.id,
        internAnswer.email,
        internAnswer.school
      );
    }
  }
}

init();
