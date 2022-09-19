const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function addEngineer(engineer) {}

function addIntern(intern) {}

//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const questions = [
  {
    type: "input",
    name: "ManagerName",
    message: "Enter the team Manager's name",
  },
  {
    type: "input",
    name: "ManagerEmployeeId",
    message: "Enter the team Manager's employee ID",
  },
  {
    type: "input",
    name: "ManagerEmail",
    message: "Enter the team Manager's email address",
  },
  {
    type: "input",
    name: "ManagerOffice",
    message: "Enter the team Manager's office number",
  },
  {
    type: "list",
    name: "menu",
    message: "Select another type of employee to add",
    choices: ["Engineer", "Intern", "I have no more employees to add"],
  },
];
