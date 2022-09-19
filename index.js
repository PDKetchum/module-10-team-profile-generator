const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

function addManager() {
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
    {
      type: "list",
      name: "menu",
      message: "Select another type of employee to add",
      choices: ["Engineer", "Intern", "I have no more employees to add"],
    },
  ];
  return questions;
}

function addEngineer(engineer) {
  const employee = new Employee(
    answers.name,
    answers.id,
    answers.email,
    answers.office
  );
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
    {
      type: "list",
      name: "menu",
      message: "Select another type of employee to add",
      choices: ["Engineer", "Intern", "I have no more employees to add"],
    },
  ];
  return questions;
}

function addIntern(intern) {
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
    {
      type: "list",
      name: "menu",
      message: "Select another type of employee to add",
      choices: ["Engineer", "Intern", "I have no more employees to add"],
    },
  ];
  return questions;
}

function init() {
  inquirer.prompt(addManager()).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
    const selection = answers.menu;
    nextEmployee(selection);
  });
}

function nextEmployee(selection) {
  if (selection === "I have no more employees to add") {
    return;
  } else if (selection === "Engineer") {
    addEngineer();
  } else if (selection === "Intern") {
    addIntern();
  }
}
