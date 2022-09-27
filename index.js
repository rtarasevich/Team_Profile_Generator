const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./src/teamGenerator');

const teamArr = [];
const managerPrompt = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "Please type in the newly minted manager's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please type in the newly minted manager's employee ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type in the newly minted manager's email address"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please type in the newly minted manager's office room number"
    },
    ])
        //This takes the info input above, deconstructs it, throws it in a new variable then pushes it to a previously empty array
        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const mintedManager = new Manager(name, id, email, officeNumber);
            teamArr.push(mintedManager);
        })
};

const employeePrompt = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: "Is this employee an engineer or an intern?",
        choices: ['Intern', 'Engineer']
    },
    {
        type: 'input',
        name: 'name',
        message: "Please type in the newly minted employee's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Please type in the newly minted employee's ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type in the newly minted employee's email address"
    },
    {
        when: (input) => input.role === "Intern",
        type: 'input',
        name: 'school',
        message: "Please type in the newly minted intern's alma mater"
    },
    {
        when: (input) => input.role === "Engineer",
        type: 'input',
        name: 'gitHub',
        message: "Please type in the newly minted Engineer's GitHub username"
    },
    {
        type: 'confirm',
        name: 'additionalEmployee',
        message: "Would you like to add any additional employees?",
        default: false
    }
])
.then(employeeData => {
    let {role, name, id, email, school, gitHub, additionalEmployee} = employeeData;
    let mintedEmployee;
        if (role === "Intern") {
            mintedEmployee = new Intern(name, id, email, school);
        } else if (role ==="Engineer") {
            mintedEmployee = new Engineer(name, id, email, gitHub);
        }
        teamArr.push(mintedEmployee);
        if (additionalEmployee) {
            return employeePrompt(teamArr);
        } else {
            return teamArr;
        }
    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, function(err){
    console.log(err);
    })
}

managerPrompt()
    .then(employeePrompt).then(teamArr => {
        return generateHTML(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
