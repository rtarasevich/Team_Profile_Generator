// Manager panel with that sexy template literal
const managersPanel = function(mintedManager) {
    return `
    <div class="panel employee-panel">
        <div class="panel-header">
        <h2 class="panel-title">${mintedManager.name}</h2>
        <h3 class="panel-title"><i class="fas fa-mug-hot"></i>${mintedManager.getRole()}</h3>
        </div>
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${mintedManager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${mintedManager.email}">${mintedManager.email}</a></li>
                <li class="list-group-item">Office number: ${mintedManager.officeNumber}</li>
    </ul>
        </div>
    </div>`
};

// Engineer panel 
const engineersPanel = function(Engineer) {
    return `
    <div class="panel employee-panel">
        <div class="panel-header">
        <h2 class="panel-title">${Engineer.name}</h2>
        <h3 class="panel-title"><i class="fas fa-user-graduate"></i>${Engineer.getRole()}</h3>
        </div>
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.gitHub}" target="_blank" rel="noopener noreferrer">${Engineer.gitHub}</a></li>
    </ul>
        </div>
    </div>`
};

const internsPanel = function(Intern) {
    return `
    <div class="panel employee-panel">
        <div class="panel-header">
        <h2 class="panel-title">${Intern.name}</h2>
        <h3 class="panel-title"><i class="fas fa-mug-hot mr-2"></i>${Intern.getRole()}</h3>
        </div>
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                <li class="list-group-item">Alma Mater: ${Intern.school}</li>
            </ul>
        </div>
    </div>` 
};

const generateHTML = function (data) {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerPanel = managersPanel(employee);
            pageArray.push(managerPanel);
        }

        if (role === 'Engineer') {
            const engineerPanel = engineersPanel(employee);
            pageArray.push(engineerPanel);
        }

        if (role === 'Intern') {
            const internPanel = internsPanel(employee);
            pageArray.push(internPanel);
        }

    }
    const employeePanels = pageArray.join('')
    const generateTeam = generateTeamPage(employeePanels);
    return generateTeam;
};

// Template literal to generate the html page
const generateTeamPage = function (employeePanels) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${employeePanels}
          </div>
      </div>
    </div>
</body>
</html>`;

};

module.exports = generateHTML;