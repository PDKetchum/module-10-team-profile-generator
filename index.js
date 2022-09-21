const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
      name: "id",
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
      engineers.push(engineer);
    } else if (selectionAnswer.selection === "Intern") {
      const internAnswer = await promptForIntern();
      const intern = new Intern(
        internAnswer.name,
        internAnswer.id,
        internAnswer.email,
        internAnswer.school
      );
      interns.push(intern);
    }
  }

  const htmlContent = generateHtmlPage(manager, engineers, interns);
  writeToFile("index.html", htmlContent);
}

init();

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

function generateHtmlPage(manager, engineers, interns) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
  </head>
  <body>
    <section>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">My Team</h1>
        </div>
      </div>
    </section>
    <section class="d-flex justify-content-center flex-wrap">
      <div class="card text-bg-light mb-3 m-3" style="max-width: 18rem">
        <div class="card-header">
          <h4>${manager.getName()}</h4>
          <h5>${manager.getRole()}</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: Email: <a href="mailto${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
       </div>
      ${generateEmployeeHtml(engineers, interns)}
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </body>
</html>
  `;
}

function generateEmployeeHtml(engineers, interns) {
  let addEmployeesinfo = "";
  for (let i = 0; i < engineers.length; i++) {
    const newEngineer = generateHtmlEngineer(engineers[i]);
    addEmployeesinfo += newEngineer;
  }
  for (let i = 0; i < interns.length; i++) {
    const newIntern = generateHtmlIntern(interns[i]);
    addEmployeesinfo += newIntern;
  }
  return addEmployeesinfo;
}

function generateHtmlEngineer(engineer) {
  return `
  <div class="card text-bg-light mb-3 m-3" style="max-width: 18rem">
    <div class="card-header">
      <h4>${engineer.getName()}</h4>
      <h5>${engineer.getRole()}</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `;
}

function generateHtmlIntern(intern) {
  return `
  <div class="card text-bg-light mb-3 m-3" style="max-width: 18rem">
    <div class="card-header">
      <h4>${intern.getName()}</h4>
      <h5>${intern.getRole()}</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: Email: <a href="mailto${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `;
}
